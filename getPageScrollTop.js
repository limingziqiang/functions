/**
 * @description 获取页面scrollTop
 * @author 未知
 */

function getPageScrollTop(){
    var a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}