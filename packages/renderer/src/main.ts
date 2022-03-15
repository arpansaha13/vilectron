import { createApp } from 'vue'
import routes from 'virtual:generated-pages'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import App from '~/App.vue'

import './styles/main.css'

const router = createRouter({
  history: (import.meta.env.DEV ? createWebHistory : createWebHashHistory)(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)

app
  .use(router)
  .mount('#app')
