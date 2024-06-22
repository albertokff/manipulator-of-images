/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import firebase from './firebase'

const app = createApp(App)

registerPlugins(app)

app.use(firebase)
app.use(router)
app.use(createPinia())
app.mount('#app')
