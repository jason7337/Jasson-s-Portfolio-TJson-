/**
 * Production startup script for Replit deployment
 * Ensures dependencies are installed before starting the server
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting production deployment...');

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
    console.log('📦 Installing dependencies...');
    try {
        execSync('npm ci', { stdio: 'inherit' });
    } catch (error) {
        console.log('⚠️  npm ci failed, trying npm install...');
        execSync('npm install', { stdio: 'inherit' });
    }
} else {
    console.log('✅ Dependencies already installed');
}

// Check if dist folder exists, if not build the project
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
    console.log('🔨 Building the project...');
    execSync('npm run build', { stdio: 'inherit' });
} else {
    console.log('✅ Build already exists');
}

// Start the Express server
console.log('🌐 Starting Express server on port 5000...');
execSync('node server.js', { stdio: 'inherit' });