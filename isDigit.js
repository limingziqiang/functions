/**
 * @description 判断是否为数字类型
 * @author 未知
 */

function isDigit(value) {
    var patrn = /^[0-9]*$/;
    if (patrn.exec(value) == null || value == "") {
        return false
    } else {
        return true
    }
}