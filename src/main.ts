import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'

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
    defaultTheme: 'dark'
  },
  typography: {
    fontSize: '16px', // taille globale
  },
})

const app = createApp(App)
app.use(vuetify)
app.use(router)

app.component('MainLayout', MainLayout)

app.mount('#app')
