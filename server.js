import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080; // Cloud Run default port

// Ensure SESSION_SECRET is available for deployment
const SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET) {
  console.error('SESSION_SECRET environment variable is required for deployment');
  process.exit(1);
}
console.log('SESSION_SECRET configured for deployment');

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  // Don't crash on unhandled rejections in production
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Give time for logging before exit
  setTimeout(() => process.exit(1), 100);
});

// Disable X-Powered-By header for security
app.disable('x-powered-by');

// Trust proxy for deployment environment
app.set('trust proxy', 1);

// Security headers middleware for Cloud Run
app.use((req, res, next) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  // Content Security Policy for enhanced security
  res.setHeader('Content-Security-Policy', [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; '));

  // HSTS for HTTPS enforcement (Cloud Run handles HTTPS termination)
  if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  next();
});

// Parse JSON and URL encoded data
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint for deployment - fast response
app.get('/health', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
    Connection: 'close',
  });
  res.status(200).json({
    status: 'OK',
    timestamp: Date.now(),
    uptime: process.uptime(),
  });
});

// Serve static files from dist directory
app.use(
  '/assets',
  express.static(path.join(__dirname, 'dist/assets'), {
    maxAge: '1y',
    immutable: true,
  }),
);

app.use(
  '/images',
  express.static(path.join(__dirname, 'dist/images'), {
    maxAge: '1d',
  }),
);

// Serve other static files
app.use(
  express.static(path.join(__dirname, 'dist'), {
    dotfiles: 'ignore',
    index: false,
    maxAge: '1h',
  }),
);

// Root endpoint - serve React app but also handle health checks
app.get('/', (req, res) => {
  // If request includes health check headers, return JSON health status
  const userAgent = req.get('User-Agent') || '';
  const isHealthCheck =
    userAgent.includes('curl') ||
    userAgent.includes('health') ||
    req.query.health !== undefined ||
    req.get('X-Health-Check');

  if (isHealthCheck) {
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
      Connection: 'close',
    });
    return res.status(200).json({
      status: 'OK',
      timestamp: Date.now(),
      uptime: process.uptime(),
      message: 'TJson Portfolio is running',
    });
  }

  // Otherwise serve React app
  const indexPath = path.join(__dirname, 'dist', 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('Build not found: dist/index.html missing');
    return res.status(500).json({
      error: 'Application not built',
      message: 'Please run npm run build',
    });
  }

  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  });

  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error serving React app:', err);
      res.status(500).json({ error: 'Failed to serve application' });
    }
  });
});

// Handle all other SPA routes - serve React app
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('Build not found: dist/index.html missing');
    return res.status(500).json({
      error: 'Application not built',
      message: 'Please run npm run build',
    });
  }

  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  });

  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error serving React app:', err);
      res.status(500).json({ error: 'Failed to serve application' });
    }
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Express error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server with enhanced startup logging
console.log('Starting server...');
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server successfully started on http://0.0.0.0:${PORT}`);
  console.log(`Root endpoint: http://0.0.0.0:${PORT}/`);
  console.log(`Health check: http://0.0.0.0:${PORT}/health`);
  console.log(`Serving from: ${path.join(__dirname, 'dist')}`);

  // Verify build exists
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(indexPath)) {
    console.log('Build verified: index.html found');
    console.log(`Build size: ${Math.round(fs.statSync(indexPath).size / 1024)}KB`);
  } else {
    console.error('Build missing: run npm run build');
  }

  console.log('Server ready for deployment health checks');
});

// Set server timeouts optimized for deployment health checks
server.timeout = 10000;
server.keepAliveTimeout = 2000;
server.headersTimeout = 5000;

// Graceful shutdown handlers
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error('Server error:', error);
    process.exit(1);
  }
});

export default app;
