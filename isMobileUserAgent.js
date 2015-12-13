/**
 * @description 判断是否是移动设备访问
 * @author 未知
 */

function isMobileUserAgent(){
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}