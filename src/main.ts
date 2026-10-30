import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import './sass/base/_tables.scss'
import { MotionPlugin } from '@vueuse/motion'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

//Router
import router from './router'

// Components
import App from './App.vue'

//Custom
import MainLayout from './layout/MainLayout.vue'

const vuetify = createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'system',
    themes: {
      // Palette inspirée de la faluche : velours noir, bordeaux et fil d'or
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-variant': '#EEEEEE',
          // Rouge un ton plus soutenu que le thème sombre : #E57373 sur blanc
          // n'atteint que 3:1, sous le seuil de lisibilité (4.5:1)
          primary: '#D32F2F',
          secondary: '#9A6B16',
          header: '#3A0F17',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121011',
          surface: '#1C1819',
          'surface-variant': '#2B2426',
          primary: '#E57373',
          secondary: '#E2B862',
          header: '#3A0F17',
        },
      },
    },
  }
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(MotionPlugin)

app.component('MainLayout', MainLayout)

app.mount('#app')
