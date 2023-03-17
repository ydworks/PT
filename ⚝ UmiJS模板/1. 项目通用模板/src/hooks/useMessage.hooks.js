/**
 * @desc: message全局提示hook
 */

import { OPERATE_ERROR, OPERATE_SUCCESS } from '@/constant';
import { message } from 'antd'; //示例

// 设置全局提示API
const msg = message;

// 配置message
msg.config({
  duration: 3,
  maxCount: 3,
});

const useMessage = () => {
  return {
    open(content, config = {}) {
      msg.open({
        content: content,
        ...config
      });
    },
    success(content = OPERATE_SUCCESS, config = {}) {
      msg.success({
        content: content,
        ...config
      });
    },
    error(content = OPERATE_ERROR, config = {}) {
      msg.error({
        content: content,
        ...config
      });
    },
    warning(content, config = {}) {
      msg.warning({
        content: content,
        ...config
      });
    },
  };
};

export default useMessage;
