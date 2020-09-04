import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../views/Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page',
    component: Page
  },
  {
    path: '/health',
    name: 'Health',
    component: () => import('../views/Health.vue')
  },
  {
    path: '/beauty',
    name: 'Beauty',
    component: () => import('../views/Beauty.vue')
  },
  {
    path: '/fun',
    name: 'Fun',
    component: () => import('../views/Fun.vue')
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import('../views/Car.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
