/**
 * @description 清除空格
 * @author 未知
 */ 
 
String.prototype.trim = function() {
    var reExtraSpace = /^\s*(.*?)\s+$/;
    return this.replace(reExtraSpace, "$1")
}

// 清除左空格
function ltrim(s){ return s.replace( /^(\s*|　*)/, ""); } 

// 清除右空格
function rtrim(s){ return s.replace( /(\s*|　*)$/, ""); }