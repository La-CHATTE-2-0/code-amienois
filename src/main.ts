import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Router
import router from './router'

// Components
import App from './App.vue'

import MainLayout from './layout/MainLayout.vue'
import Code from './pages/Code.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

const pinia = createPinia()

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(pinia)

app.component('MainLayout', MainLayout)
app.component('Code', Code)

app.mount('#app')
