import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',       // Allows external access
    port: 5173,            // Explicit port
    strictPort: true,      // Prevents port fallback
    allowedHosts: [
      'redefine-mlhj.onrender.com'  // Add your Render.com host here
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'redefine-mlhj.onrender.com'  // Also allow in preview mode
    ]
  }
});
