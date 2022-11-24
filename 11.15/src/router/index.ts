import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Management from '../views/Management.vue'
import Explanation from '../views/Explanation.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/explane',
    name: 'explane',
    component: Explanation
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/management',
    name: 'management',
    component: Management
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
