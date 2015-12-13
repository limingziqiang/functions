/**
 * @description 判断是否Touch屏幕
 * @author 未知
 */

function isTouchScreen(){
    return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
}