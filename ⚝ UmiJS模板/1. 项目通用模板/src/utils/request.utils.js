// 引入axios
import { httpCode, USER_KEY } from '@/constant';
import { useMessage } from '@/hooks';
import axios from 'axios';
import { history } from 'umi';
import storage from './storage.utils';

// 创建实例
const instance = axios.create({
  baseURL: API_URL, //配置基地址
  timeout: 5000, //超时
  headers: { 'Content-Type': 'multipart/form-data' }, //支持post
});

//#region 不同状态码处理
const invalidIdentityCodes = { 204: 1, 205: 1, 400: 1, 401: 1 }; //身份失效状态码集合
const handleHttpCode = (code, msg) => {
  const message = useMessage();

  if (httpCode[code]) {
    message.error(httpCode[code]);
  } else {
    msg && message.error(msg);
  }

  // 处理身份失效状态码
  if (invalidIdentityCodes[code]) {
    storage.remove(USER_KEY);
    history.push('/login');
  }
};
//#endregion

/**
 * 使用axios实例发起请求
 * @param {*} options 请求实例配置项
 * @returns {Promise} 请求结果
 */
const baseRequest = (options) => {
  const user = storage.get(USER_KEY);
  // 判断是否具备Token
  if (user) {
    // 添加 鉴权token
    (options.headers || (options.headers = {})).authorization = user;
  }

  // 返回实例请求结果
  return instance(options)
    .then((res) => {
      // console.log("options", options);
      const data = res.data || {};
      // 请求失败时
      if (res.status !== 201 && res.status !== 200) {
        // 请求失败时，在这里集中处理
        // 这里请求失败时，会被下面catch捕捉
        // handleHttpCode(res.status, data?.data);
        return Promise.reject({ res, data });
      }
      // 请求成功时
      if (res.status === 200 || res.status === 201) {
        // 判断是否返回blob类型，具备文件名
        if (res.headers['content-disposition']) {
          // 携带文件名返回
          data['filename'] = res.headers['content-disposition'].split('attachment; filename=')[1];
        }
        // 返回获取数据
        return Promise.resolve(data);
      }
    })
    .catch((err) => {
      // 捕获err：
      // 如果是 instance(options) 中reject触发，那么捕获的err就是 instance(options) 中reject 给的 err
      // 如果是 上面Promise.reject({ res, data }) 触发，那么捕获的err就是 { res, data }
      const status = err?.response?.data?.code || err?.response?.status || err?.res?.status;
      const message = err?.message || res?.data?.data;
      handleHttpCode(status, message);
      return Promise.reject({ msg: '请求失败', err });
    });
};

// 封装请求
const request = ['post', 'put', 'patch', 'delete'].reduce((request, method) => {
  /**
   * 给请求添加方法
   * @param {*} url 请求路由
   * @param {*} data 请求数据
   * @param {*} option 请求配置选项
   * @returns
   */
  request[method] = (url, data = {}, option = {}) => {
    // 调用 axios实例
    return baseRequest(Object.assign({ method, url, data }, option));
  };
  return request;
}, {});

['get', 'head'].forEach((method) => {
  /**
   * @param url string 接口地址
   * @param params object get参数
   * @param options object axios配置项
   * @returns {AxiosPromise}
   */
  request[method] = (url, params = {}, options = {}) => {
    return baseRequest(Object.assign({ url, params, method }, options));
  };
});

export default request;
