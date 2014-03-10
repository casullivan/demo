var S, trayReqested, trayDown, slide, video, slide_number;
$(document).ready(function() {
	
	S = new Swiper('.parent-swiper',{
		loop: true,
		autoplay:false,
		resistance: '100%'
	});

	S.wrapperTransitionEnd(function(e){
		slide_number=e.activeLoopIndex;
		if(slide_number==0){
			$('#tray').slideDown(175);
			$('#navbar').slideUp(150);
		} else {
			$('#navbar').slideDown(150);
		}

		if(slide) video.pause();
		if($(e.activeSlide()).hasClass('video')){
			slide=$(e.activeSlide());
			video=slide.find('video').get(0);
			html5Video.init();
			video.play();
		}

		//uncomment for production
		// if(typeof(Storage)!=="undefined"){
	 //  		localStorage.setItem('slide_number', slide_number);
		// }
	}, true);


	// if(typeof(Storage)!=="undefined"){
	//   	if (localStorage.getItem('slide_number')){
	//   		S.swipeTo(localStorage.getItem('slide_number'), 0);
	// 		if(localStorage.getItem('slide_number')==0){
	// 			$('#tray').slideDown(175);
	// 			$('#navbar').slideUp(150);
	// 		} else {
	// 			$('#navbar').slideDown(150);
	// 		}
	//   	}
	// }

	var html5Video = function() {
	   return {
	       init: function() {
	           video.addEventListener('ended', endVideo, false);
	           video.addEventListener('pause', pauseVideo, false);
	           video.addEventListener('play', playVideo, false);
	       }
	   };
	}();

	$(document).on('tapthree', function(){
		window.location.reload();
	});

	// tap local
	$('t').on('tapone', function(e){
		console.log($(this).data('go'));
		goTo($(this).data('go'));
	});

	// tap href
	$('tap').on('tapone', function(e){
		window.location+=$(this).attr('href');
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
		S.stopAutoplay();
		$(".pause_play").addClass('play');
	}

	function endVideo() { 
		S.startAutoplay();
		S.swipeNext();
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
		S.swipeTo($(selector).index()-1, 0);
	}

window.onload = function(){ document.ontouchmove = function(e){ e.preventDefault(); } }

function addToNav(o){

}

function clickr(e){
	e.preventDefault();
	alert('z clicked');
}