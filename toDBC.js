/**
 * @description 半角转换为全角函数
 * @author 未知
 */

function toDBC(str){
    var result = '';
    for(var i=0; i < str.length; i++){
        code = str.charCodeAt(i);
        if(code >= 33 && code <= 126){
              result += String.fromCharCode(str.charCodeAt(i) + 65248);
        }else if (code == 32){
              result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
        }else{
              result += str.charAt(i);
        }
    }
    return result;
}