$( document ).ready(function() {
	//$('body').html(window.screen.availHeight+'x'+window.screen.availWidth);
	var swiper1 = new Swiper('.swiper-nested-1',{

	})
	var swiper2 = new Swiper('.swiper-nested-2')
	var swiper3 = new Swiper('.swiper-nested-3')
	var parentSwiper = new Swiper('.parent-swiper',{
		mode: 'vertical',
		onSlideChangeEnd: function(swiper, direction){
			swiper1.swipeTo(0);
			swiper2.swipeTo(0);
			swiper3.swipeTo(0);
		}
	});

  document.ontouchmove = function(e){ e.preventDefault(); }
});