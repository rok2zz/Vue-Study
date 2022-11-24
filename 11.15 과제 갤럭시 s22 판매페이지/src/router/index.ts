import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SamsungHome from '../views/SamsungHome.vue'
import sub from '../views/sub.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: SamsungHome
  },
  {
    path: '/sub',
    name: 'sub',
    component: sub
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
