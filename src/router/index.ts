import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import vHome from '@/views/vHome.vue'
import vLogin from '@/views/vLogin.vue'
import vRegister from '@/views/vRegister.vue'
import vSettings from '@/views/vSettings.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'vHome',
    component: vHome
  },
  {
    path: '/login',
    name: 'vLogin',
    component: () => import('@/views/vLogin.vue')
  },
  {
    path: '/register',
    name: 'vRegister',
    component: () => import('@/views/vRegister.vue')
  },
  {
    path: '/settings',
    name: 'vSettings',
    component: () => import('@/views/vSettings.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
