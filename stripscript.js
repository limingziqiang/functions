/**
 * @description 清除脚本内容
 * @author 未知
 */

function stripscript(s) {
    return s.replace(/<script.*?>.*?<\/script>/ig, '');
}