import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Replit-optimized Vite configuration for portfolio deployment
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    // Optimize build for Replit deployment
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: false,
    // Allow all hosts including dynamic Replit domains
    allowedHosts: [
      "localhost",
      "127.0.0.1", 
      "0.0.0.0",
      ".replit.dev",
      /.*\.replit\.dev$/
    ],
    // Disable host check completely for Replit compatibility
    disableHostCheck: true,
    // Replit-specific server configuration
    hmr: {
      port: 5001,
      host: "0.0.0.0",
      clientPort: 443
    },
    watch: {
      usePolling: true,
      interval: 300
    }
  },
  // Optimize for Replit environment
  esbuild: {
    target: 'es2020'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
});
