var S;
$(document).ready(function() {
	
	S = new Swiper('.parent-swiper',{
		loop: true,
		autoplay:false,
		resistance: '100%'
	});

	S.wrapperTransitionEnd(function(e){
		// if(e.activeSlide().id=='1')
		// 	$("#video").get(0).play();
		window.location.hash=e.activeSlide().id;
}, true);


	// var html5Video = function() {
 //    return {
 //        init: function() {
 //            var video = document.getElementsByTagName('video')[0];
 //            video.addEventListener('ended', endVideo, false);
 //            video.addEventListener('pause', pauseVideo, false);
 //            video.addEventListener('play', playVideo, false);
 //        }
 //    };
	// }();
	// html5Video.init();

	// tap local
	$('t').on('tap', function(e){
		S.swipeTo($(this).data('s'), 500);
	});

	// tap href
	$('th').on('tap', function(e){
		window.location+=$(this).attr('href');
	});

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
	  		$('#tray').slideDown(100);
			// S.stopAutoplay();
			// S.swipeTo(nextBookmark(S.activeIndex), 100);
	    },
		swipeUp:function(event, direction, distance, duration) {
	  		$('#tray').slideUp(100);
			// S.startAutoplay();
			// S.swipeTo(prevBookmark(S.activeIndex), 100);
	  	},
	});	

	//$('.swiper-slide').each(function(i, o) { if($(o).attr('id' ,i).hasClass('b')) addToNav(o); });
});

window.onload = function(){ document.ontouchmove = function(e){ e.preventDefault(); } }

function addToNav(o){

}

function clickr(e){
	e.preventDefault();
	alert('z clicked');
}