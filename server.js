/**
 * Production Express server for Replit deployment
 * Serves static files and handles health checks properly
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
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

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist'), {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}));

// Handle all routes by serving the index.html file (SPA routing)
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  
  // Check if index.html exists
  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found');
    return res.status(500).json({ 
      error: 'Application not built', 
      message: 'Run npm run build first' 
    });
  }
  
  // Serve the SPA for all routes
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).json({ error: 'Failed to serve application' });
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