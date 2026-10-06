import './lib/analytics'
import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import './index.css'

// Production HTML is rendered at build time; development keeps Vite's HMR flow.
const app = import.meta.env.PROD ? createSSRApp(App) : createApp(App)
app.mount('#main')
