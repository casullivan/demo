$( document ).ready(function() {
	
	var parentSwiperCount = parseInt($('.parent-swiper').data('count'));
	var swiper1 = new Swiper('.swiper-nested-1',{
		onResistanceAfter: function(swiper, pixels){ if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipeNext(); },
		onResistanceBefore: function(swiper, pixels){ if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipeTo(parentSwiperCount, 100, false); }
	});
	var swiper2 = new Swiper('.swiper-nested-2',{
		onResistanceAfter: function(swiper, pixels){ if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipeNext(); },
		onResistanceBefore: function(swiper, pixels){ if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipePrev(); }
	});
	var swiper3 = new Swiper('.swiper-nested-3',{
		onResistanceAfter: function(swiper, pixels){ if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipeTo(0, 100, false); },
		onResistanceBefore: function(swiper, pixels){ if(pixels >= 100 || pixels <= -100 ) parentSwiper.swipePrev(); }
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

	$(document.body).swipe({
		swipeUp:function(event, direction, distance, duration) {
	    	parentSwiper.swipePrev();
	  	},
	
	  	swipeDown:function(event, direction, distance, duration) {
			parentSwiper.swipeNext();
	    },
	});	

  document.ontouchmove = function(e){ e.preventDefault(); }
});