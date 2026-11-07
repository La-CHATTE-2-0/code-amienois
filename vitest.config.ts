import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// Config dédiée aux tests : on ne reprend pas les plugins de build (PWA, analytics, images…)
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.spec.ts'],
    setupFiles: ['src/test/setup.ts'],
    restoreMocks: true,
    // Vuetify importe ses propres feuilles de style : Vite doit les traiter lui-même
    server: { deps: { inline: ['vuetify'] } },
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,vue}'],
      exclude: ['src/**/*.spec.ts', 'src/test/**'],
      reporter: ['text', 'html', 'lcov'],
    },
  },
})
