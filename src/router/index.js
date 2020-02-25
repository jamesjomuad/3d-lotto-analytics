import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Index.vue')
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