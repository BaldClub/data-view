import Vue from 'vue'
import VueRouter from 'vue-router'
import { compileToFunctions } from 'vue-template-compiler'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/index/index.vue')
      },
      {
        path: '/trace',
        component: () => import('../views/trace')
      },
      {
        path: '/monitor',
        component: () => import('../views/monitor')
      }
    ]
  },
  {
    path: '/login',
    component: ()=> import('../views/login/login.vue'),
  } ,
  {
    path: '*',
    name: '/404',
    component: () => import('../views/error/404.vue')
  } 
]

const router = new VueRouter({
  routes
})

export default router
