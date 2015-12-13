/**
 * @description 按字母排序，对每行进行数组排序
 * @author 未知
 */

function setSort(){
    var text=K1.value.split(/[\r\n]/).sort().join("\r\n");//顺序
    var test=K1.value.split(/[\r\n]/).sort().reverse().join("\r\n");//反序
    K1.value=K1.value!=text?text:test;
}