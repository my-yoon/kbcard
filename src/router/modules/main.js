const main = [
    {
        path: '/main',
        name: 'mainpage',
        component: () => import('@/views/main/Main.vue'),
        meta: {
            unauthorized: true,
            sublocation_depth: ['메뉴Depth1', '메뉴Depth1-1']
        }
    },
    
]
export default main;