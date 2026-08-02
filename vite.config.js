import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Inline assets smaller than 4 KB as base64
    assetsInlineLimit: 4096,
    // Split CSS per chunk for faster loading
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Split heavy vendor libraries into separate chunks
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'vendor-framer';
          if (id.includes('lucide-react')) return 'vendor-lucide';
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'vendor-react';
        },
      },
    },
  },
})
