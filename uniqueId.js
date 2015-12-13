/**
 * @description 随机数时间戳
 * @author 未知
 */

function uniqueId(){
    var a=Math.random,b=parseInt;
    return Number(new Date()).toString()+b(10*a())+b(10*a())+b(10*a());
}