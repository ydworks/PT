import { defineConfig } from 'umi';
import commonConfig from './config/common.config';

export default defineConfig({
  ...commonConfig,
  define: {
    //环境变量
    API_URL: '/api', //接口代理
    BASE_URL: 'http://xxxxx:3001', //接口基地址
  },
  proxy: {
    '/api': {
      //接口代理配置
      target: 'http://xxxxx:3001/api/v1',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
