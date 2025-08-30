/**
 * Production Express server for Replit deployment
 * Serves static files and handles health checks properly
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure SESSION_SECRET is available for deployment
const SESSION_SECRET = process.env.SESSION_SECRET || 'replit-portfolio-session-secret-2024';
if (!process.env.SESSION_SECRET) {
  console.warn('⚠️  SESSION_SECRET environment variable not set, using default');
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint for deployments - optimized for fast response
app.get('/health', (req, res) => {
  // Set response timeout to ensure fast response
  res.setTimeout(2000, () => {
    console.log('Health check timeout');
    res.status(503).json({ status: 'TIMEOUT' });
  });
  
  // Immediate response for health checks
  res.set({
    'Cache-Control': 'no-cache',
    'Connection': 'close'
  });
  res.status(200).json({ status: 'OK', timestamp: Date.now() });
});

// Handle all routes by serving the index.html file (SPA routing)
// Exclude health check and API routes from catch-all
app.get('*', (req, res, next) => {
  // Skip catch-all for health checks and API routes
  if (req.path.startsWith('/health') || req.path.startsWith('/api')) {
    return next();
  }
  
  // Serve the SPA for all other routes
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Server Error');
    }
  });
});

// Start the server with error handling
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  console.log(`✅ Health check available at http://0.0.0.0:${PORT}/health`);
  
  // Set server timeout for health checks
  server.timeout = 5000;
  server.keepAliveTimeout = 2000;
  server.headersTimeout = 3000;
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('👋 SIGINT received, shutting down gracefully...');
  process.exit(0);
});