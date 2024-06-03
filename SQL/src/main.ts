import './assets/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Lara from '@/presets/lara'

import PrimeVue from 'primevue/config'

const app = createApp(App)
const pinia = createPinia()

app.use(createPinia())
app.use(pinia)
app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara
})

app.mount('#app')
/* error message passwords and input text */
