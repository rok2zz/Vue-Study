import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bi from '../views/Bi.vue'
import Sale from '../views/Sale.vue'
import AppDownload from '../views/AppDownload.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bi',
    name: 'bi',
    component: Bi
  },
  {
    path: '/sale',
    name: 'sale',
    component: Sale
  },
  {
    path: '/download',
    name: 'download',
    component: AppDownload
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
