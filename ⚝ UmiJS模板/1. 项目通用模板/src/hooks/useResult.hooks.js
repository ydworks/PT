/**
 * @desc: 操作后全局信息提示hook
 */

import useMessage from "./useMessage.hooks";

const message = useMessage();

/**
 * useResult hook
 * @param {*} requestFn 请求函数
 * @param {*} callback 回调函数
 * @param {*} content 成功信息
 * @returns {Array} 返回请求数据
 */
const useResult = (requestFn, callback, content) => {
  return new Promise((resolve, reject) => {
    requestFn &&
      requestFn()
        .then((res) => {
          // 操作成功
          if (res?.code === 200) {
            callback && callback();
            message.success(content);
          }
          // 操作失败
          else {
            message.error(res?.data);
          }
          resolve(res?.data);
        })
        .catch((err) => {
          reject(err);
        });
  });
};

export default useResult;
