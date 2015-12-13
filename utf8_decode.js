/**
 * @description 实现utf8解码
 * @author 未知
 */

function utf8_decode(str_data){
    var tmp_arr = [],i = 0,ac = 0,c1 = 0,c2 = 0,c3 = 0;str_data += '';
    while (i < str_data.length) {
            c1 = str_data.charCodeAt(i);
            if (c1 < 128) {
                    tmp_arr[ac++] = String.fromCharCode(c1);
                    i++;
            } else if (c1 > 191 && c1 < 224) {       
                    c2 = str_data.charCodeAt(i + 1);
                    tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
                    i += 2;
            } else {
                    c2 = str_data.charCodeAt(i + 1);
                    c3 = str_data.charCodeAt(i + 2);
                    tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
            }
    } 
    return tmp_arr.join('');
}