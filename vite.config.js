import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // React plugin
  server: {
    host: '0.0.0.0', // Allows external access (LAN, Docker, Render.com)
    port: 5173,      // Explicit port (optional)
    strictPort: true, // Prevents fallback to another port if 5173 is busy
  },
  preview: {
    host: '0.0.0.0', // Same for preview mode (npm run preview)
    port: 5173,      // Consistent port for production preview
  }
});
