// vite.config.js / vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,sass,html,ico,png,svg}']
      },
      manifest: {
        "short_name": "Code Amiénois",
        "name": "Code de la Faluche Amiénoise",
        "description": "Code de la Faluche Amiénoise",
        "start_url": "/",
        "display": "standalone",
        "icons": [
          {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon",
            "purpose": "any"
          },
          {
            "src": "/icons-128.png",
            "type": "image/png",
            "sizes": "128x128",
            "purpose": "maskable"
          },
          {
            "src": "/icons-192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "/icons-512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        "theme_color": "#212529",
        "background_color": "#ffffff"
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  root: path.resolve(__dirname, '.'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        speamiens: path.resolve(__dirname, './pages/speamiens.html'),
        notespm: path.resolve(__dirname, './pages/notespm.html'),
        checklistcongres: path.resolve(__dirname, './pages/checklistcongres.html'),
      },
    },
  }
}