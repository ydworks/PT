/* 导出所有常量文件 */
export { default as httpCode } from './httpCode.constant';
export * from './models.constant';
export * from './storage.constant';

/* 公共常量 */
export const LOGIN_ERROR = '登录失败，请重试';
export const OPERATE_SUCCESS = '操作成功';
export const OPERATE_ERROR = '操作失败';
export const OPERATE_NOALLOW = "您不是超级管理员，没有权限";
