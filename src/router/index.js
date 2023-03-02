import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/index')
      },
      {
        path: '/trace',
        component: () => import('../views/trace')
      },
      {
        path: '/monitor',
        component: () => import('../views/monitor')
      },
      {
        path: '/equipment',
        component: () => import('../views/equipment')
      },
      {
        path: '/data-statistics',
        component: () => import('../views/data-statistics')
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
