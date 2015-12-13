/**
 * @description 全角半角转换
 * @author 未知
 */

//iCase: 0全到半，1半到全，其他不转化
function chgCase(sStr,iCase){
    if(typeof sStr != "string" || sStr.length <= 0 || !(iCase === 0 || iCase == 1)){
        return sStr;
    }
    var i,oRs=[],iCode;
    if(iCase){/*半->全*/
        for(i=0; i<sStr.length;i+=1){ 
            iCode = sStr.charCodeAt(i);
            if(iCode == 32){
                iCode = 12288;                                
            }else if(iCode < 127){
                iCode += 65248;
            }
                oRs.push(String.fromCharCode(iCode)); 
            }                
    }else{/*全->半*/
        for(i=0; i<sStr.length;i+=1){ 
            iCode = sStr.charCodeAt(i);
            if(iCode == 12288){
                iCode = 32;
            }else if(iCode > 65280 && iCode < 65375){
                iCode -= 65248;                                
            }
                oRs.push(String.fromCharCode(iCode)); 
         }                
    }                
    return oRs.join("");                
}