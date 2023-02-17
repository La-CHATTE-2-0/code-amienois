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
        "short_name": "Code Amienois",
        "name": "Code de la Faluche Amienoise",
        "description": "Code de la Faluche Amienoise",
        "start_url": "/index.html",
        "display": "standalone",
        "icons": [
          {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon",
            "purpose": "any"
          },
          {
            "src": "./images/icons-128.png",
            "type": "image/png",
            "sizes": "128x128",
            "purpose": "maskable"
          },
          {
            "src": "./images/icons-192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "./images/icons-512.png",
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
}