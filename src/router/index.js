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
    path: '/swertres/analytics',
    name: 'Analytics',
    component: () => import('../views/swertres/Analytics.vue')
  },
  {
    path: '/swertres/combinations',
    name: 'Combination',
    component: () => import('../views/swertres/Combination.vue')
  },
  {
    path: '/swertres/pattern',
    name: 'Pattern',
    component: () => import('../views/swertres/Pattern.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
