$(document).ready(function() {
	
	var S = new Swiper('.parent-swiper',{
		loop: true,
		autoplay:false,
		resistance: '100%'
	});

	S.wrapperTransitionEnd(function(e){
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
	html5Video.init();

	function playVideo() { 
		S.stopAutoplay();
	}

	function endVideo() { 
		S.startAutoplay();
	}

	function pauseVideo() { 
	    var video = document.getElementsByTagName('video')[0];
	    if (!video.webkitDisplayingFullscreen)
			S.startAutoplay();
	}

	$(document).swipe({
	  	swipeDown:function(event, direction, distance, duration) {
	  		$('#tray').slideDown(400);
			// S.stopAutoplay();
			// S.swipeTo(nextBookmark(S.activeIndex), 100);
	    },
		swipeUp:function(event, direction, distance, duration) {
	  		$('#tray').slideUp(400);
			// S.startAutoplay();
			// S.swipeTo(prevBookmark(S.activeIndex), 100);
	  	},
	});	

	$('.swiper-slide').each(function(i, o) { if($(o).hasClass('b')) addToNav(o); });
});

window.onload = function(){ document.ontouchmove = function(e){ e.preventDefault(); } }

function addToNav(o){

}