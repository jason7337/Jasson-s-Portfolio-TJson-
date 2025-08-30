/**
 * Production Express server for Replit deployment
 * Optimized for fast health checks and reliable static file serving
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

// Parse JSON and URL encoded data
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Root endpoint - fast response for health checks
app.get('/', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Connection': 'close'
  });
  res.status(200).send('OK');
});

// Health check endpoint - optimized for deployment
app.get('/health', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache', 
    'Expires': '0',
    'Connection': 'close'
  });
  res.status(200).json({ 
    status: 'OK', 
    timestamp: Date.now(),
    uptime: process.uptime()
  });
});

// Serve static files from dist directory
app.use('/assets', express.static(path.join(__dirname, 'dist/assets'), {
  maxAge: '1y',
  immutable: true
}));

app.use('/images', express.static(path.join(__dirname, 'dist/images'), {
  maxAge: '1d'
}));

// Serve other static files
app.use(express.static(path.join(__dirname, 'dist'), {
  dotfiles: 'ignore',
  index: false,
  maxAge: '1h'
}));

// Handle SPA routes - serve React app for all other routes
app.get('*', (req, res) => {
  // Skip if this is an API route or already handled
  if (req.path.startsWith('/api') || req.path.startsWith('/health')) {
    return res.status(404).json({ error: 'Not found' });
  }

  const indexPath = path.join(__dirname, 'dist', 'index.html');
  
  // Check if build exists
  if (!fs.existsSync(indexPath)) {
    console.error('❌ Build not found: dist/index.html missing');
    return res.status(500).json({ 
      error: 'Application not built',
      message: 'Please run npm run build'
    });
  }
  
  // Serve React app
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('❌ Error serving React app:', err);
      res.status(500).json({ error: 'Failed to serve application' });
    }
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Express error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  console.log(`✅ Health check: http://0.0.0.0:${PORT}/health`);
  console.log(`📁 Serving from: ${path.join(__dirname, 'dist')}`);
  
  // Verify build exists
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(indexPath)) {
    console.log('✅ Build verified: index.html found');
  } else {
    console.error('❌ Build missing: run npm run build');
  }
});

// Set server timeouts for deployment
server.timeout = 30000;
server.keepAliveTimeout = 5000;
server.headersTimeout = 10000;

// Graceful shutdown handlers
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('👋 SIGINT received, shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');  
    process.exit(0);
  });
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error('❌ Server error:', error);
    process.exit(1);
  }
});

export default app;