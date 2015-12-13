/**
 * @description 全角转换为半角函数
 * @author 未知
 */

function toCDB(str){
    var result = '';
    for(var i=0; i < str.length; i++){
        code = str.charCodeAt(i);
        if(code >= 65281 && code <= 65374){
              result += String.fromCharCode(str.charCodeAt(i) - 65248);
        }else if (code == 12288){
              result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
        }else{
              result += str.charAt(i);
        }
    }
    return result;
}