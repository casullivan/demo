$(function() {

 var mySwiper1 = new Swiper('#demo1',{
    loop:true,
    grabCursor: true,
    paginationClickable: true
  });
 var mySwiper1 = new Swiper('#demo2',{
    loop:true,
    grabCursor: true,
    paginationClickable: true
  });
 var mySwiper1 = new Swiper('#demo3',{
    loop:true,
    grabCursor: true,
    paginationClickable: true
  });
  document.ontouchmove = function(e){ e.preventDefault(); }
});