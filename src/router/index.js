import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/triple/analytics',
    name: 'Analytics',
    component: () => import('../views/triple/Analytics.vue')
  },
  {
    path: '/triple/tools',
    name: 'Pattern',
    component: () => import('../views/triple/Tools.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router