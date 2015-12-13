/**
 * @description 判断是否以某个字符串开头
 * @author 未知
 */

String.prototype.startWith = function (s) {
    return this.indexOf(s) == 0
}