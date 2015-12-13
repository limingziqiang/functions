/**
 * @description 转义html标签
 * @author 未知
 */

function HtmlEncode(text) {
    return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>');
}