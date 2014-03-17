var S, slide, video;
$(document).ready(function() {
	
	$.stayInWebApp();
	var html5Video = function() {
	   return {
	       init: function() {
	           video.addEventListener('ended', endVideo, false);
	           video.addEventListener('pause', pauseVideo, false);
	           video.addEventListener('play', playVideo, false);
	       }
	   };
	}();

	S = new Swiper('.parent-swiper',{
		loop: true,
		useCSS3Transforms:true,
		autoplay:false,
		onSlideChangeStart: function(e, d){
			if($(e.activeSlide()).hasClass('video')){
				slide=$(e.activeSlide());
				video=slide.find('video').get(0);
				html5Video.init();
				video.play();
			} else {
				if(slide) {
					video.pause();
					slide=false;
				}
			}

			// if(typeof(Storage)!=="undefined"){
		 //  		localStorage.setItem('slide_number', e.activeLoopIndex);
			// }
		},
		resistance: '100%'
	});

	// if(typeof(Storage)!=="undefined"){
	//   	if (localStorage.getItem('slide_number')){
	//   		S.swipeTo(localStorage.getItem('slide_number'), 0);
	//   		if($(S.activeSlide()).hasClass('video')){
	// 			slide=$(S.activeSlide());
	// 			video=slide.find('video').get(0);
	// 			html5Video.init();
	// 			video.play();
	// 		}
	//   	}
	// }

	$(document).on('tapthree', function(){
		window.location.reload();
	});
	
	$(".pause_play").on('tapone', function(){
		if(slide){
			if($(this).hasClass('play'))
				video.pause();
			else
				video.play();
		}
	});

	$(".replay").on('tapone', function(){
		if(slide) video.currentTime=0;
	});

	function playVideo() {
		$(".pause_play").addClass('play');
		S.stopAutoplay();
	}

	function endVideo() { 
		$(".pause_play").removeClass('play');
		if(slide) video.currentTime=0;
	}

	function pauseVideo() { 
		$(".pause_play").removeClass('play');
	}

	$(document).swipe({
	  	swipeDown:function(event, direction, distance, duration) {
	  		$('#tray').slideDown(100);
	    },
		swipeUp:function(event, direction, distance, duration) {
	  		$('#tray').slideUp(100);
	  	},
	});	
});

function specific(s){
	if(S) S.swipeTo(s,0);
}

function goTo(selector){
	S.swipeTo(($(selector).index()-1), 0);
}