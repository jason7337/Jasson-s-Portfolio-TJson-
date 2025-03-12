# Build stage - Optimized for Cloud Run deployment
FROM node:20-alpine AS builder

# Install build dependencies for native modules
RUN apk add --no-cache python3 make g++ && \
    ln -sf python3 /usr/bin/python

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies with production optimizations
RUN npm ci --include=dev && \
    npm cache clean --force

# Copy source code after dependencies are installed
COPY . .

# Build the application with Cloud Run optimizations
RUN npm run build && \
    rm -rf node_modules && \
    npm ci --omit=dev && \
    npm cache clean --force

# Production stage - Minimal runtime optimized for Cloud Run
FROM node:20-alpine AS production

# Install dumb-init for proper signal handling and security packages
RUN apk add --no-cache dumb-init ca-certificates && \
    apk upgrade

# Create non-root user for enhanced security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

WORKDIR /app

# Copy built application with proper ownership
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/package*.json ./
COPY --from=builder --chown=nodejs:nodejs /app/server.js ./
COPY --from=builder --chown=nodejs:nodejs /app/start-production.js ./
COPY --from=builder --chown=nodejs:nodejs /app/public ./public

# Set environment variables for Cloud Run
ENV NODE_ENV=production \
    PORT=8080 \
    NODE_OPTIONS="--max-old-space-size=512"

# Switch to non-root user
USER nodejs

# Expose port for Cloud Run
EXPOSE 8080

# Optimized health check for Cloud Run
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
    CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 8080) + '/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Use dumb-init for proper signal handling in Cloud Run
ENTRYPOINT ["dumb-init", "--"]

# Start the production server
CMD ["node", "start-production.js"]