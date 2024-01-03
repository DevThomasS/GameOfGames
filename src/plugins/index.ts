/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router/router'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app.use(vuetify)
  // No need to use Vue Router as a plugin
  // Instead, directly set the router instance on the app
  app.config.globalProperties.$router = router

  // Optionally, you can also set the router on the app's context
  app.provide('router', router)
}
