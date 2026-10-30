import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'
import { VitePluginRadar } from 'vite-plugin-radar'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import pages from './src/core/page'

const SITE_URL = 'https://www.code-amienois.app'
const APP_NAME = 'Code Amiénois'

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Les aperçus de lien (Discord, Messenger, WhatsApp…) n'exécutent pas le JS :
// chaque page (hors accueil, servi par index.html) reçoit son propre index.html avec titre et description dans le <head>
function pageMetaPlugin(): Plugin {
  let outDir = 'dist'
  return {
    name: 'page-meta',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    writeBundle() {
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf-8')
      // Azure ne sert /page/index.html pour /page que via une réécriture déclarée
      const azureRoutes: string[] = JSON.parse(readFileSync('staticwebapp.config.json', 'utf-8'))
        .routes.map((route: { route: string }) => route.route)
      for (const page of Object.values(pages)) {
        if (!('description' in page) || page.url === pages.code.url) continue
        if (!azureRoutes.includes(page.url)) {
          this.warn(`${page.url} : réécriture absente de staticwebapp.config.json`)
        }
        const title = escapeHtml(`${page.name} · ${APP_NAME}`)
        const description = escapeHtml(page.description)
        const url = `${SITE_URL}${page.url}`
        const html = template
          .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
          .replace(/(<meta\s+(?:name|property)="(?:og:|twitter:)?title"\s+content=")[^"]*/g, `$1${title}`)
          .replace(/(<meta\s+(?:name|property)="(?:og:|twitter:)?description"\s+content=")[^"]*/g, `$1${description}`)
          .replace(/(<meta\s+property="og:url"\s+content=")[^"]*/, `$1${url}`)
        const dir = resolve(outDir, page.url.slice(1))
        mkdirSync(dir, { recursive: true })
        writeFileSync(resolve(dir, 'index.html'), html)
      }
    },
  }
}

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
    ViteImageOptimizer(),
    pageMetaPlugin(),
  ],
})
