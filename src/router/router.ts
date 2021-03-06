export const page404 = {
    path: '*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/pages/error-page/404.vue')
};
export const page500 = {
    path: '/error-500',
    name: 'error-500',
    meta: {
        title: '500-页面不存在'
    },
    component: () => import('@/pages/error-page/500.vue')
};

export const appRouter = [
    {
        path: '/welcome',
        name: 'welcome',
        meta: {
            title: '欢迎'
        },
        component: () => import('@/pages/welcome.vue')
    },
    {
        path: '/articles/:pageNo(\\d*)',
        name: 'articles',
        meta: {
            title: '文章列表'
        },
        alias: '/:pageNo(\\d*)',
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/article/:id',
        name: 'article',
        meta: {
            title: '文章'
        },
        component: () => import('@/pages/article/index.vue')
    },
    {
        path: '/tags',
        name: 'tags',
        meta: {
            title: '归档'
        },
        component: () => import('@/pages/tags/index.vue')
    },
    {
        path: '/tag/:id',
        name: 'tag',
        meta: {
            title: '类别'
        },
        component: () => import('@/pages/tag/index.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于'
        },
        component: () => import('@/pages/about/index.vue')
    }
];

export const routes = [
    ...appRouter,
    page404,
    page500
];