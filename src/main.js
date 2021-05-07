import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import i18n from './i18n'
import './registerServiceWorker'

const app = createApp(App).use(i18n)
app.use(ElementPlus)
app.mount('#app')
