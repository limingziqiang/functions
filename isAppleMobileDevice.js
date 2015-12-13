/**
 * @description 判断是否苹果移动设备访问
 * @author 未知
 */

function isAppleMobileDevice(){
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
}