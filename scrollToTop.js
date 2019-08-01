/**
 *  滚动到顶部
 *  
 *  使用document.documentElement.scrollTop 或 document.body.scrollTop 获取到顶部的距离，从顶部
 *  滚动一小部分距离。使用window.requestAnimationFrame()来滚动。
 *     
 *  @example
 *  scrollToTop();
 */
 
 function scrollToTop() {
 	var c = document.documentElement.scrollTop || document.body.scrollTop;

 	if(c > 0) {
 		window.requestAnimationFrame(scrollToTop);
 		window.scrollTo(0, c - c / 8);
 	}
 }
