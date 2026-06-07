import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import './index.css'

createApp(App)
  .use(createMetaManager())
  .mount('#main')
