import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Registry from './pages/Registry.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/registry',
      component: Registry,
    },
  ],

scrollBehavior() {
  return { top: 0 }
},
})

export default router