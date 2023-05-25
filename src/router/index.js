import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/home.vue'),
        children: [
            {
                path: '/',
                component: () => import('../views/index'),
            },
            {
                path: '/trace',
                component: () => import('../views/trace'),
            },
            {
                path: '/monitor',
                component: () => import('../views/monitor'),
            },
            {
                path: '/data-statistics',
                component: () => import('../views/data-statistics'),
            },
            {
                path: '/farm-work',
                component: () => import('../views/farm-work'),
            },
            {
                path: '/equipment',
                component: () => import('../views/equipment'),
            },
            {
                path: '/production',
                component: () => import('../views/production'),
            },
            {
                path: '/environmental',
                component: () => import('../views/environmental'),
            },
        ],
    },
    {
        path: '/login',
        component: () => import('../views/login/login.vue'),
    },
    {
        path: '/change-password',
        component: () => import('../views/change-password'),
    },
    {
        path: '/china',
        component: () => import('../views/trace/components/bg/china.vue'),
    },
    {
        path: '*',
        name: '/404',
        component: () => import('../views/error/404.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
