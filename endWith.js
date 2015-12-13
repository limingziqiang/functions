/**
 * @description 判断是否以某个字符串结束
 * @author 未知
 */

String.prototype.endWith = function (s) {
    var d = this.length - s.length;
    return (d >= 0 && this.lastIndexOf(s) == d)
}