/**
 * @description 获取页面可视宽度
 * @author 未知
 */

function getPageViewWidth(){
    var d = document, a = d.compatMode == "BackCompat"
                    ? d.body
                    : d.documentElement;
    return a.clientWidth;
}