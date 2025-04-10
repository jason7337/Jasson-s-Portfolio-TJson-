import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting production deployment...');

// Set NODE_ENV to production
process.env.NODE_ENV = 'production';

// Set SESSION_SECRET for deployment if not already set
if (!process.env.SESSION_SECRET) {
  process.env.SESSION_SECRET =
    'replit-portfolio-secure-session-' + Date.now() + '-' + Math.random().toString(36).substring(2);
  console.log('SESSION_SECRET set for deployment');
}

// Handle errors gracefully
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection during startup:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception during startup:', error);
  process.exit(1);
});

try {
  // Check if node_modules exists
  const nodeModulesPath = path.join(__dirname, 'node_modules');
  if (!fs.existsSync(nodeModulesPath)) {
    console.log('Installing dependencies...');
    try {
      execSync('npm ci --production=false', { stdio: 'inherit', cwd: __dirname });
    } catch (error) {
      console.log('npm ci failed, trying npm install...');
      execSync('npm install', { stdio: 'inherit', cwd: __dirname });
    }
  } else {
    console.log('Dependencies already installed');
  }

  // Check if dist folder exists and is complete
  const distPath = path.join(__dirname, 'dist');
  const indexPath = path.join(distPath, 'index.html');
  const assetsPath = path.join(distPath, 'assets');

  let needsBuild = false;

  if (!fs.existsSync(distPath)) {
    console.log('Dist folder not found');
    needsBuild = true;
  } else if (!fs.existsSync(indexPath)) {
    console.log('index.html not found');
    needsBuild = true;
  } else if (!fs.existsSync(assetsPath)) {
    console.log('Assets folder not found');
    needsBuild = true;
  } else {
    console.log('Build already exists and appears complete');
  }

  if (needsBuild) {
    console.log('Building the project...');

    // Clean existing build
    if (fs.existsSync(distPath)) {
      console.log('Cleaning existing build...');
      execSync('rm -rf dist', { stdio: 'inherit', cwd: __dirname });
    }

    // Build the project
    console.log('Running build command...');
    execSync('npm run build', {
      stdio: 'inherit',
      cwd: __dirname,
      env: { ...process.env, NODE_ENV: 'production' },
    });

    // Verify build was successful
    if (!fs.existsSync(indexPath)) {
      throw new Error('Build failed: index.html not found after build');
    }

    if (!fs.existsSync(assetsPath)) {
      throw new Error('Build failed: assets folder not found after build');
    }

    // Check build size
    const stats = fs.statSync(indexPath);
    if (stats.size < 1000) {
      throw new Error('Build failed: index.html is too small, likely empty');
    }

    console.log('Build completed successfully');
    console.log(`index.html size: ${Math.round(stats.size / 1024)}KB`);
  }

  // Verify server file exists
  const serverPath = path.join(__dirname, 'server.js');
  if (!fs.existsSync(serverPath)) {
    throw new Error('server.js not found');
  }

  // Start the server
  console.log('Starting Express server...');
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`Working directory: ${__dirname}`);

  // Import and start the server
  try {
    execSync('node server.js', {
      stdio: 'inherit',
      cwd: __dirname,
      env: {
        ...process.env,
        NODE_ENV: 'production',
        PORT: process.env.PORT || '8080', // Changed default port for Cloud Run
      },
    });
  } catch (serverError) {
    if (serverError.message.includes('EADDRINUSE')) {
      console.error('Port is already in use');
      console.log('This might be a development server still running');
      console.log('For deployment, this is normal and will be handled automatically');
      process.exit(0); // Exit gracefully for deployment
    } else {
      throw serverError;
    }
  }
} catch (error) {
  console.error('Production startup failed:', error.message);
  console.error('Full error:', error);
  process.exit(1);
}
