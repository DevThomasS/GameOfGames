import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router/router'

const app = createApp(App).use(router)

registerPlugins(app)

app.mount('#app')
