import { request } from '@/utils';

const BASE = '/user';

/**
 * 登录API
 * @param {*} name 账号
 * @param {*} password 密码
 */
export const loginApi = (name = '', password = '') => {
  return request.post(`${BASE}/post`, { name, password });
};
