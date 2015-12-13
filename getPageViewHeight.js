/**
 * @description 获取页面可视高度
 * @author 未知
 */

function getPageViewHeight() {
    var d = document, a = d.compatMode == "BackCompat"
                    ? d.body
                    : d.documentElement;
    return a.clientHeight;
}