var S, slide, video, slide_number;
$(document).ready(function() {
	
	S = new Swiper('.parent-swiper',{
		loop: true,
		autoplay:2000,
		autoplayDisableOnInteraction:true,
		onTouchMove:
			function(swiper){
				pauseAutoplay(S, 6000);
			},
		resistance: '100%'
	});

	var html5Video = function() {
	   return {
	       init: function() {
	           video.addEventListener('ended', endVideo, false);
	           video.addEventListener('pause', pauseVideo, false);
	           video.addEventListener('play', playVideo, false);
	       }
	   };
	}();

	S.wrapperTransitionEnd(function(e){
		slide_number=e.activeLoopIndex;
		console.log('slide_number=' + slide_number + '	active index=' + e.activeIndex + '	slide.index=' + $(e).index());
		
		if(slide_number==0){
			$('#tray').slideDown(175);
			$('#navbar').slideUp(150);
		} else {
			$('#navbar').slideDown(150);
		}

		if(slide) {
			video.pause();
			S.startAutoplay();
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
	}, true);

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

	$(document).on('rotate', function(){
		window.location.reload();
	});

	$(document).on('swipemove', function(){
		setTimeout(function(){ swiper.startAutoplay(); }, 1000);
	});


	// $(document).on('swiperight', function(){
	// 	console.log('swiperight');
	// 	pauseAutoplay(S, 2000);
	// 	S.swipeNext();
	// });

	// $(document).on('swipeleft', function(){
	// 	console.log('left');
	// 	pauseAutoplay(S, 2000);
	// 	S.swipePrev();
	// });	

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
		$(".pause_play").addClass('play');
		S.stopAutoplay();
	}

	function endVideo() { 
		$(".pause_play").removeClass('play');
		if(slide) video.currentTime=0;
		S.startAutoplay();
	}

	function pauseVideo() { 
		$(".pause_play").removeClass('play');
		setTimeout(function(){ S.startAutoplay(); }, 1000);
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

function pauseAutoplay(swiper, duration){
	swiper.stopAutoplay();
	setTimeout(function(){ swiper.startAutoplay(); }, 1000);
}

function goTo(selector){
	pauseAutoplay(S, 4000);
	console.log(selector + ' ' + $(selector).index() + ' ' + S.swipeTo(($(selector).index()-1), 0));
}

window.onload = function(){ document.ontouchmove = function(e){ e.preventDefault(); } }