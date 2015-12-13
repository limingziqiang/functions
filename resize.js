/**
 * @description resize的操作
 * @author 未知
 */

(function(){
    var fn = function(){
            var w = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth
                    ,r = 1255
                    ,b = Element.extend(document.body)
                    ,classname = b.className;
            if(w < r){
                    //当窗体的宽度小于1255的时候执行相应的操作
            }else{
                    //当窗体的宽度大于1255的时候执行相应的操作
            }
    }
    if(window.addEventListener){
            window.addEventListener('resize', function(){ fn(); });
    }else if(window.attachEvent){
            window.attachEvent('onresize', function(){ fn(); });
    }
    fn();
})();