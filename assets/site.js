$( document ).ready(function() {
	//$('body').html(window.screen.availHeight+'x'+window.screen.availWidth);
	var parentSwiperCount = parseInt($('.parent-swiper').data('count'));
	console.log(parentSwiperCount);
	var swiper1 = new Swiper('.swiper-nested-1',{
		onResistanceAfter: function(swiper, pixels){ if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipeNext(); }
	});
	var swiper2 = new Swiper('.swiper-nested-2',{
		onResistanceAfter: function(swiper, pixels){ if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipeNext(); }
	});
	var swiper3 = new Swiper('.swiper-nested-3',{
		onResistanceAfter: function(swiper, pixels){ if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipeTo(0, 100, false); }
	});
	var parentSwiper = new Swiper('.parent-swiper',{
		noSwiping: true,
		resistance: '100%',
		onResistanceBefore: function(swiper, pixels){ 
			 if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipeTo(parentSwiperCount, 100, false); 
		},
		onResistanceAfter: function(swiper, pixels){ 
			 if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipeTo(0, 100, false); 
		},
		onSlideChangeStart: function(swiper, direction){
			swiper1.swipeTo(0);
			swiper2.swipeTo(0);
			swiper3.swipeTo(0);
		}
	});

  document.ontouchmove = function(e){ e.preventDefault(); }
});

//mySwiper.wrapperTransitionEnd(callback,permanent) 