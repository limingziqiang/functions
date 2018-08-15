# 常用函数收集

| function                      | description                             |
|:----------------------------- |:----------------------------------------|
| SaferHTML.js                  | 安全模板
| cutstr.js                     | 字符串长度截取    |
| replaceAll.js                 | 替换全部      |
| trim.js                       | 清除空格      |
| startWith.js                  | 判断是否以某个字符串开头      |
| endWith.js                    | 判断是否以某个字符串结束      |
| HtmlEncode.js                 | 转义html标签      |
| dateFormat.js                 | 时间日期格式转换      |
| timeFormat.js                 | 时间个性化输出功能      |
| isDigit.js                    | 判断是否为数字类型      |
| setCookie.js                  | 设置cookie值      |
| getCookie.js                  | 获取cookie值      |
| addFavorite.js                | 加入收藏夹      |
| setHomepage.js                | 设为首页      |
| backTop.js                    | 返回顶部的通用方法      |
| openWindow.js                 | 打开一个窗体通用方法      |
| loadStyle.js                  | 加载样式文件      |
| evalscript.js                 | 返回脚本内容      |
| stripscript.js                | 清除脚本内容      |
| appendscript.js               | 动态加载脚本文件      |
| addEventSamp.js               | 跨浏览器绑定事件      |
| delEvt.js                     | 跨浏览器删除事件      |
| ElementOn.js                  | 为元素添加on方法      |
| ElementTrigger.js             | 为元素添加trigger方法      |
| getUrlState.js                | 检验URL链接是否有效      |
| isURL.js                      | 判断是否为网址      |
| removeUrlPrefix.js            | 去掉url前缀      |
| getGet.js                     | 获得URL中GET参数值      |
| formatCss.js                  | 格式化CSS样式代码      |
| compressCss.js                | 压缩CSS样式代码      |
| currentPageUrl.js             | 获取当前路径      |
| isMobile.js                   | 判断是否移动设备      |
| isMobileUserAgent.js          | 判断是否是移动设备访问      |
| isAppleMobileDevice.js        | 判断是否苹果移动设备访问      |
| isAndroidMobileDevice.js      | 判断是否安卓移动设备访问      |
| isTouchScreen.js              | 判断是否Touch屏幕      |
| isViewportOpen.js             | 判断是否打开视窗      |
| isMouseOut.js                 | 判断鼠标是否移出事件      |
| getInitZoom.js                | 获取移动设备初始化大小      |
| getZoom.js                    | 获取移动设备最大化大小      |
| getScreenWidth.js             | 获取移动设备屏幕宽度      |
| getPageHeight.js              | 获取页面高度      |
| getPageViewHeight.js          | 获取页面可视高度      |
| getPageWidth.js               | 获取页面宽度      |
| getViewSize.js                | 获取窗体可见范围的宽与高      |
| getPageViewWidth.js           | 获取页面可视宽度      |
| getPageScrollLeft.js          | 获取页面scrollLeft      |
| getPageScrollTop.js           | 获取页面scrollTop      |
| getScrollXY.js                | 获取网页被卷去的位置      |
| resize.js                     | resize的操作      |
| uniqueId.js                   | 随机数时间戳      |
| chgCase.js                    | 全角半角转换      |
| toDBC.js                      | 半角转换为全角函数      |
| toCDB.js                      | 全角转换为半角函数      |
| checkKey.js                   | 确认是否是键盘有效输入值      |
| offsetX.js                    | 解决offsetX兼容性问题      |
| allURL.js                     | 提取页面代码中所有网址      |
| setSort.js                    | 按字母排序，对每行进行数组排序      |
| transform.js                  | 金额大写转换函数      |
| base64_decode.js              | 实现base64解码      |
| utf8_decode.js                | 实现utf8解码      |

# 常用正则表达式收集

```
//正整数
/^[0-9]*[1-9][0-9]*$/;
//负整数
/^-[0-9]*[1-9][0-9]*$/;
//正浮点数
/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;   
//负浮点数
/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;  
//浮点数
/^(-?\d+)(\.\d+)?$/;
//email地址
/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
//url地址
/^[a-zA-z]+://(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/;
或：^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$ 
//年/月/日（年-月-日、年.月.日）
/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
//匹配中文字符
/[\u4e00-\u9fa5]/;
//匹配帐号是否合法(字母开头，允许5-10字节，允许字母数字下划线)
/^[a-zA-Z][a-zA-Z0-9_]{4,9}$/;
//匹配空白行的正则表达式
/\n\s*\r/;
//匹配中国邮政编码
/[1-9]\d{5}(?!\d)/;
//匹配身份证
/\d{15}|\d{18}/;
//匹配国内电话号码
/(\d{3}-|\d{4}-)?(\d{8}|\d{7})?/;
//匹配IP地址
/((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/;
//匹配首尾空白字符的正则表达式
/^\s*|\s*$/;
//匹配HTML标记的正则表达式
< (\S*?)[^>]*>.*?|< .*? />;
//sql 语句
^(select|drop|delete|create|update|insert).*$
//提取信息中的网络链接
(h|H)(r|R)(e|E)(f|F) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)? 
//提取信息中的邮件地址
\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)* 
//提取信息中的图片链接
(s|S)(r|R)(c|C) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)? 
//提取信息中的 IP 地址
(\d+)\.(\d+)\.(\d+)\.(\d+)
//取信息中的中国手机号码
(86)*0*13\d{9} 
//提取信息中的中国邮政编码
[1-9]{1}(\d+){5} 
//提取信息中的浮点数（即小数）
(-?\d*)\.?\d+ 
//提取信息中的任何数字
(-?\d*)(\.\d+)?
//电话区号
^0\d{2,3}$
//腾讯 QQ 号
^[1-9]*[1-9][0-9]*$ 
//帐号（字母开头，允许 5-16 字节，允许字母数字下划线）
^[a-zA-Z][a-zA-Z0-9_]{4,15}$ 
//中文、英文、数字及下划线
^[\u4e00-\u9fa5_a-zA-Z0-9]+$
```
