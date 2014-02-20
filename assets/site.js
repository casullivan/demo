$(function() {
	//$('body').html(window.screen.availHeight+'x'+window.screen.availWidth);
var mySwiper = new Swiper('#main',{
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    mode: 'vertical'
  });
 var mySwiper1 = new Swiper('#demo1',{
    loop:true,
    grabCursor: true,
    paginationClickable: true
  });
 var mySwiper2 = new Swiper('#demo2',{
    loop:true,
    grabCursor: true,
    paginationClickable: true
  });
 var mySwiper3 = new Swiper('#demo3',{
    loop:true,
    grabCursor: true,
    paginationClickable: true
  });
  document.ontouchmove = function(e){ e.preventDefault(); }
});