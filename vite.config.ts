import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'
import { VitePluginRadar } from 'vite-plugin-radar'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import pluginPurgeCss from "vite-plugin-purgecss-updated-v5";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,sass,html,ico,png,svg,webp,jpeg,JPG,jpg,woff2,woff}']
      },
      manifest: {
        "short_name": "Code Amiénois",
        "name": "Code de la Faluche Amiénoise",
        "description": "Code de la Faluche Amiénoise",
        "start_url": "/",
        "display": "standalone",
        "icons": [
          {
            "src": "/icons-512.png",
            "type": "image/png",
            "sizes": "512x512",
            "purpose": "any maskable",
          },
          {
            "src": "/icons-192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "/icons-128.png",
            "type": "image/png",
            "sizes": "128x128"
          },
          {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon",
            "purpose": "any"
          },
        ],
        "theme_color": "#121212",
        "background_color": "#ffffff"
      },
      devOptions: {
        enabled: true
      }
    }),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-XPELB5DRNK',
      },
    }),
    pluginPurgeCss({
      variables: true,
    }),
    ViteImageOptimizer(),
  ],
})
