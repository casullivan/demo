$(document).ready(function() {
	var parentSwiper = new Swiper('.parent-swiper',{
		loop: true,
		autoplay:4000,
		resistance: '100%'
	});

	parentSwiper.wrapperTransitionEnd(function(e){
		window.location.hash=e.activeSlide().id;
	}, true);

	$(document.body).swipe({
	  	swipeDown:function(event, direction, distance, duration) {
			parentSwiper.swipeTo(nextBookmark(parentSwiper.activeIndex), 700);
	    },
		swipeUp:function(event, direction, distance, duration) {
			parentSwiper.swipeTo(prevBookmark(parentSwiper.activeIndex), 700);
	  	},
	});	

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

window.onload = function(){ document.ontouchmove = function(e){ e.preventDefault(); } }