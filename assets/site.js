$(document).ready(function() {
	var parentSwiper = new Swiper('.parent-swiper',{
		loop: true,
		autoplay:4000,
		resistance: '100%'
	});

	parentSwiper.wrapperTransitionEnd(function(e){
		if(e.activeSlide().id=='1')
			$("#video").get(0).play();
		window.location.hash=e.activeSlide().id;
	}, true);


	var html5Video = function() {
    return {
        init: function() {
            var video = document.getElementsByTagName('video')[0];
            video.addEventListener('ended', endVideo, false);
            video.addEventListener('pause', pauseVideo, false);
            video.addEventListener('play', playVideo, false);
        }
    };
	}();

	function playVideo() { 
		alert('play');
		//$('#video_cover').css('visibility','visible');
	}

	function endVideo() { 
    	alert("video ended");
	}

	function pauseVideo() { 
	    var video = document.getElementsByTagName('video')[0];
	    if (!video.webkitDisplayingFullscreen)
	        endVideo(); 
	}

	html5Video.init();

	$("#video").bind('scroll', function(){
		$("html, body").animate({ scrollTop: 0 }, "fast");
	});

	$(document).swipe({
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