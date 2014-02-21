$( document ).ready(function() {

	var parentSwiperCount = parseInt($('.parent-swiper').data('count'));
	var parentSwiper = new Swiper('.parent-swiper',{
		loop: true,
		resistance: '50%',
		onResistanceAfter: function(swiper, pixels){ 
			 if(pixels >= 50 || pixels <= -50 ) parentSwiper.swipeTo(0, 150, false); 
		},
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