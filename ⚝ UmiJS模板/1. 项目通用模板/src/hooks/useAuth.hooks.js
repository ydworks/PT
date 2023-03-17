/**
 * @desc: 用户鉴权信息统一管理hook
 */

import { LOGIN_ERROR, USER_KEY, USER_MODEL } from '@/constant';
import { loginApi } from '@/services';
import { storage } from '@/utils';
import { useCallback, useState } from 'react';
import { history, useModel } from 'umi';
import useMessage from './useMessage.hooks';

const message = useMessage();

const useAuth = () => {
  const { user: userData, setUser } = useModel(USER_MODEL);
  const [user] = useState(userData);
  const [isLogin] = useState(() => userData ? true : false);
  const [isAdmin] = useState(() => userData?.superadmin ? true : false);

  const login = useCallback(async (value) => {
    const res = await loginApi(value.username, value.password);
    if (res?.code === 200) {
      setUser(res?.data);
      message.success('登录成功');
      history.push('/');
    } else {
      message.error(LOGIN_ERROR);
    }
  }, []);

  const logout = useCallback(() => {
    storage.remove(USER_KEY);
    history.replace('/login');
  }, []);

  return {
    isLogin, //是否已登录
    isAdmin, //是否为超级管理员
    user, //用户信息
    login, //登录API
    logout, //注销API
  };
};

export default useAuth;
