$(function() {
 //  $('#demo1').slidesjs({
 //    width: 235,
 //    height: 88,
 //    play:{
	//     restartDelay: 500,
	//     auto: true
	// },
 //    navigation: false
 //  });

 //  $('#demo2').slidesjs({
 //    width: 235,
 //    height: 88,
 //    play:{
	//     restartDelay: 500,
	//     auto: true
	// },
 //    navigation: false,
 //    callback:{
 //    	loaded: function(n){
 //    	}
 //    }
 //  });
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

  document.ontouchmove = function(e){ e.preventDefault(); }
});