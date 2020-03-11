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
  {
    path: '/ref',
    name: 'Ref',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ref" */ '../views/Ref.vue'),
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () =>
      import(/* webpackChunkName: "reactive" */ '../views/Reactive.vue'),
  },
  {
    path: '/computed',
    name: 'computed',
    component: () =>
      import(/* webpackChunkName: "computed" */ '../views/Computed.vue'),
  },
  {
    path: '/event',
    name: 'Event',
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/Event.vue'),
  },
  {
    path: '/binding',
    name: 'Binding',
    component: () =>
      import(/* webpackChunkName: "binding" */ '../views/Binding.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
