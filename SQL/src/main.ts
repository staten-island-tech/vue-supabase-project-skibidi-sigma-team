
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/base.css"
import App from './App.vue'
import router from './router'
import Lara from '@/presets/lara';   
import Card from 'primevue/card'
const app = createApp(App)
import PrimeVue from 'primevue/config';
app.use(PrimeVue, {
    unstyled:true,
    pt: Lara
    // pt:preset
    // download presets from primevue github
});
app.component("Card",Card)
app.use(createPinia())
app.use(router)

app.mount('#app')
