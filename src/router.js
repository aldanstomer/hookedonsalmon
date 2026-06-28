import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Registry from './pages/Registry.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/registry', component: Registry },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})