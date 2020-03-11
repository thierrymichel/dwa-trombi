import Vue from 'vue'
import VueRouter from 'vue-router'
import Data from '../views/Data.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Data',
    component: Data,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
