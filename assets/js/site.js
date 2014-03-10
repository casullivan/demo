var S, trayReqested, trayDown, slide, video;
$(document).ready(function() {
	
	S = new Swiper('.parent-swiper',{
		loop: true,
		autoplay:false,
		resistance: '100%'
	});

	// if(window.location.hash!=0)
	//  	goTo(window.location.hash);

	S.wrapperTransitionEnd(function(e){
		if(e.activeLoopIndex==0){
			$('#tray').slideDown(175);
			$('#navbar').slideUp(150);
			//$('#front_page_links').slideDown(50);
		} else {
			$('#navbar').slideDown(150);
			//$('#front_page_links').hide();
		}

		if(slide) video.pause();
		if($(e.activeSlide()).hasClass('video')){
			slide=$(e.activeSlide());
			video=slide.find('video').get(0);
			html5Video.init();
			video.play();
		}

		// if(e.previousIndex==0){
		// 	$('#navbar').slideDown(100);
		// 	$('#front_page_links').hide();
		// }
		// 	$("#video").get(0).play();
		// window.location.hash=e.activeSlide().id;
}, true);


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
		// S.swipeTo($(this).data('s'), 500);
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
	  //   var video = document.getElementsByTagName('video')[0];
	  //   if (!video.webkitDisplayingFullscreen)
			// S.startAutoplay();
	}



	$(document).swipe({
	  	swipeDown:function(event, direction, distance, duration) {
	  		$('#tray').slideDown(100);
	    },
		swipeUp:function(event, direction, distance, duration) {
	  		$('#tray').slideUp(100);
	  	},
	});	

	// $(document).ready(function(){
	// 	$('.swiper-slide').each(function(i, obj) { /*if($(obj).hasClass('b')) */$(obj).attr('data-value',i) });
	// });
	//slide.isActive()
	//$('.swiper-slide').each(function(i, o) { if($(o).attr('id' ,i).hasClass('b')) addToNav(o); });
});

	function goTo(selector){
		console.log('goto' + selector);
		S.swipeTo($(selector).index()-1, 0);
	}

window.onload = function(){ document.ontouchmove = function(e){ e.preventDefault(); } }

function addToNav(o){

}

function clickr(e){
	e.preventDefault();
	alert('z clicked');
}