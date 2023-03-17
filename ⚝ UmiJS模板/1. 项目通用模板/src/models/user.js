/* 用户 Model */
import { useCallback, useState } from 'react';
import { USER_KEY } from '@/constant';
import { storage } from '@/utils';

export default () => {
  const [state, setState] = useState(() => {
    const user = storage.get(USER_KEY) || null;
    if (user) return user;
  });

  const setUser = useCallback((payload = {}) => {
    storage.set(USER_KEY, payload);
    setState(payload);
  }, []);

  return {
    user: state,
    setUser,
  };
};
