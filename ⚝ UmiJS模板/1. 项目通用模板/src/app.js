/* 运行时配置文件-扩展运行时的能力 */
import { USER_KEY } from './constant';
import { storage } from './utils';

const getAuth = () => {
  const user = storage.get(USER_KEY);
  return user;
};

// 权限路由
const authRoutes = {
  admin: ["/xxx"], //项目管理员
  superAdmin: ["/xxx2"], //超级管理员
};

// 配置：修改路由
export function patchRoutes({ routes }) {
  // 获取权限
  const { isadmin, superadmin } = getAuth() || { isadmin: false, superadmin: false };
  // 判断权限 并筛选权限路由
  if (!isadmin) {
    routes[1].routes = routes[1].routes.filter(
      (route) => !authRoutes.admin.includes(route.path)
    );
  }
  if (!superadmin) {
    routes[1].routes = routes[1].routes.filter(
      (route) => !authRoutes.superAdmin.includes(route.path)
    );
  }
}

// 配置：切换路由
// export function onRouteChange({ location, routes, action }) {
//   const target = document.querySelector(".ant-layout-content");
//   if (isBrowser()) {
//     // 主体滚动条重置
//     if (target) target.scrollTo(0, 0);
//   }
// }
