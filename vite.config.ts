import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      verbose: true,           // Output compressed result to console
      disable: false,          // Set to true to disable the plugin
      deleteOriginFile: false, // Set to true to delete the original files after compression
      threshold: 10240,        // Only compress files bigger than 10kb
      algorithm: 'gzip',       // Algorithm used to compress files
      ext: '.gz',              // File extension for compressed files
    }),
  ],
})
