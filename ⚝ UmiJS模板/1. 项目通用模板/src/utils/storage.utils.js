/**
 * @desc: 数据操作持久化API
 */

// 设置持久化方式
const storage = localStorage;

export default {
  /**
   * 获取指定的持久化数据
   * @param {string} key 数据键
   * @param {*} param 对象下的参数（返回指定的数据）
   */
  get(key, param = '') {
    const result = JSON.parse(storage.getItem(key));
    if (result && param) {
      return result[param] || null;
    }
    return result || null;
  },

  /**
   * 设置持久化数据
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    storage.setItem(key, JSON.stringify(value));
  },

  /**
   * 移除指定的持久化数据
   * @param {string} key
   */
  remove(key) {
    storage.removeItem(key);
  },
};
