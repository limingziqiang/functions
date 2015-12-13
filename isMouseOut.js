/**
 * @description 判断鼠标是否移出事件
 * @author 未知
 */

function isMouseOut(e, handler) {
    if (e.type !== 'mouseout') {
            return false;
    }
    var reltg = e.relatedTarget ? e.relatedTarget : e.type === 'mouseout' ? e.toElement : e.fromElement;
    while (reltg && reltg !== handler) {
            reltg = reltg.parentNode;
    }
    return (reltg !== handler);
}
