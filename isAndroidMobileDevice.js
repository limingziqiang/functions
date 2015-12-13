/**
 * @description 判断是否安卓移动设备访问
 * @author 未知
 */

function isAndroidMobileDevice(){
    return (/android/i.test(navigator.userAgent.toLowerCase()));
}