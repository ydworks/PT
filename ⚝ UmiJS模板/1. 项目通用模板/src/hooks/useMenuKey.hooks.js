/**
 * @desc: 获取导航菜单栏当前栏的Key
 */

// import { useUpdateEffect } from "ahooks";
import { useState } from "react";
import { useLocation } from "umi";

const useMenuKey = () => {
  const { pathname } = useLocation();

  const [key, setKey] = useState(() => {
    if (pathname === "/") return "/home";
    return pathname;
  });

  // 监听pathname
  useUpdateEffect(() => {
    setKey(pathname);
  }, [pathname]);

  return [key];
};

export default useMenuKey;
