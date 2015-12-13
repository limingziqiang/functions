/**
 * @description 解决offsetX兼容性问题
 * @author 未知
 */

// 针对火狐不支持offsetX/Y
function getOffset(e){
    var target = e.target, // 当前触发的目标对象
          eventCoord,
          pageCoord,
          offsetCoord;
 
    // 计算当前触发元素到文档的距离
    pageCoord = getPageCoord(target);
 
    // 计算光标到文档的距离
    eventCoord = {
        X : window.pageXOffset + e.clientX,
        Y : window.pageYOffset + e.clientY
    };
 
    // 相减获取光标到第一个定位的父元素的坐标
    offsetCoord = {
        X : eventCoord.X - pageCoord.X,
        Y : eventCoord.Y - pageCoord.Y
    };
    return offsetCoord;
}
 
function getPageCoord(element){
    var coord = { X : 0, Y : 0 };
    // 计算从当前触发元素到根节点为止，
    // 各级 offsetParent 元素的 offsetLeft 或 offsetTop 值之和
    while (element){
        coord.X += element.offsetLeft;
        coord.Y += element.offsetTop;
        element = element.offsetParent;
    }
    return coord;
}