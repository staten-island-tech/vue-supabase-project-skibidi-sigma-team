import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Lara from '@/presets/lara';   
const app = createApp(App)
import PrimeVue from 'primevue/config';
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
    // pt:preset
});

app.use(createPinia())
app.use(router)

app.mount('#app')
