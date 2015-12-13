/**
 * @description 获取页面宽度
 * @author 未知
 */

function getPageWidth(){
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
                    ? a
                    : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}