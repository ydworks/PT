/**
 * @desc：共享配置文件
 */

import routes from './routes.config';

export default {
  fastRefresh: {}, //快速刷新
  // mfsu: {}, //加速热更新
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'xxx网站', //标题配置
  links: [{ rel: 'icon', href: 'favicon.ico' }], //网站图标配置
  routes,
};
