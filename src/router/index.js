import { createRouter, createWebHistory } from 'vue-router'
import Data from '../views/Data.vue'

const routes = [
  {
    path: '/',
    name: 'Data',
    component: Data,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
