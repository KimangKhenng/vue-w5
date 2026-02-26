import { createApp } from 'vue'
import App from './App.vue'
// import "@/assets/font.css"
import "@/assets/main.css"
import router from '@/router/router'
import { createPinia } from 'pinia'
import { loggerPlugin } from '@/plugins/loggerPlugin'
import { persistPlugin } from '@/plugins/persistPlugin'
import i18n from '@/i18n/i18n'

const pinia = createPinia()
pinia.use(loggerPlugin)
pinia.use(persistPlugin)
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
