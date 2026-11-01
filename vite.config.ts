import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// base: './' ensures assets load correctly when hosted under a GitHub Pages
// project subpath (e.g. https://<user>.github.io/<repo>/).
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
