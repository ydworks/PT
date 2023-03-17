/**
 * @desc 路由配置文件
 */

export default [
  { path: '/login', component: 'login' },
  {
    path: '/',
    component: '@/layouts',
    // wrappers: ['@/wrappers/auth'],
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: 'home' },
      { component: '@/pages/404' },
    ],
  },
];
