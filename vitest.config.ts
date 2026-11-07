import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// Config dédiée aux tests : on ne reprend pas les plugins de build (PWA, analytics, images…)
export default defineConfig({
  // Les images (/images/…) sont servies depuis public/ : inutile de les résoudre comme des modules
  plugins: [vue({ template: { transformAssetUrls: false } }), vuetify({ autoImport: true })],
  test: {
    environment: 'happy-dom',
    // Les tests vivent dans tests/, en miroir de l'arborescence de src/
    include: ['tests/**/*.spec.ts'],
    setupFiles: ['tests/setup.ts'],
    restoreMocks: true,
    // Vuetify importe ses propres feuilles de style : Vite doit les traiter lui-même
    server: { deps: { inline: ['vuetify'] } },
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,vue}'],
      exclude: ['src/**/*.d.ts'],
      reporter: ['text', 'html', 'lcov'],
    },
  },
})
