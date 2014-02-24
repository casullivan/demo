$( document ).ready(function() {
	//var count = parseInt($('.parent-swiper').data('count'));
	var parentSwiper = new Swiper('.parent-swiper',{
		loop: true,
		autoplay:10000,
		resistance: '50%',
		onResistanceAfter: function(swiper, pixels){ 
			 if(pixels >= 50 || pixels <= -50 ) parentSwiper.swipeTo(0, 150, false); 
		},
	});

	$(document.body).swipe({
	  	swipeDown:function(event, direction, distance, duration) {
			parentSwiper.swipeTo(nextBookmark(parentSwiper.activeIndex), 700);
	    },
		swipeUp:function(event, direction, distance, duration) {
			parentSwiper.swipeTo(prevBookmark(parentSwiper.activeIndex), 700);
	  	},
	});	

	document.ontouchmove = function(e){ e.preventDefault(); }

	function nextBookmark(index){
		for(var i = 0; i<bookmarks.length; i++)
			if(bookmarks[i]>index) return bookmarks[i];
		return 0;
	}

	function prevBookmark(index){
		if(index<=1) return bookmarks[bookmarks.length-1];
		for(var i = bookmarks.length-1; i>=0; i--)
			if(bookmarks[i]<index-1) return bookmarks[i];
	}
});