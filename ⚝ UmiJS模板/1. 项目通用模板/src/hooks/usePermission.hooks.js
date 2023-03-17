/**
 * @desc: 包装权限操作（非权限用户-禁止操作）
 */

import { OPERATE_NOALLOW } from "@/constant";
import { useCallback } from "react";
import useAuth from "./useAuth.hooks";
import useMessage from "./useMessage.hooks";

const message = useMessage();

const usePermission = (handler) => {
  const { isAdmin } = useAuth();
  const wrapHandler = useCallback(() => {
    if (!isAdmin) return message.warning(OPERATE_NOALLOW);
    handler && handler();
  }, []);

  return wrapHandler;
};

export default usePermission;
