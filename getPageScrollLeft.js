/**
 * @description 获取页面scrollLeft
 * @author 未知
 */

function getPageScrollLeft(){
    var a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}