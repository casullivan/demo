var S, slide, video, slide_number;
$(document).ready(function() {
	
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
		autoplay:false,
		onSlideChangeStart: function(e, d){
		slide_number=e.activeLoopIndex;
		
		if(slide_number==0){
			$('#tray').slideDown(175);
			$('#navbar').slideUp(150);
		} else {
			$('#navbar').slideDown(150);
		}

		if(slide) {
			video.pause();
		}

		if($(e.activeSlide()).hasClass('video')){
			slide=$(e.activeSlide());
			video=slide.find('video').get(0);
			html5Video.init();
			video.play();
		}

		if(typeof(Storage)!=="undefined"){
	  		localStorage.setItem('slide_number', slide_number);
		}

		},
		resistance: '100%'
	});

	if(typeof(Storage)!=="undefined"){
	  	if (localStorage.getItem('slide_number')){
	  		S.swipeTo(localStorage.getItem('slide_number'), 0);
	  		if($(S.activeSlide()).hasClass('video')){
				slide=$(S.activeSlide());
				video=slide.find('video').get(0);
				html5Video.init();
				video.play();
			}

			if(localStorage.getItem('slide_number')==0){
				$('#tray').show();
				$('#navbar').hide();
			} else {
				$('#navbar').show();
			}
	  	}
	}

	$(document).on('rotate tapthree', function(){
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

function goTo(selector){
	S.swipeTo(($(selector).index()-1), 1000);
}