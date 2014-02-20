$( document ).ready(function() {
	//$('body').html(window.screen.availHeight+'x'+window.screen.availWidth);
	var parentSwiper = new Swiper('#main',{
		mode: 'vertical',
		onResistanceAfter: function(s,p){
			console.log("resist after main "+p);
				parentSwiper.swipeNext();
		},
		onResistanceBefore: function(s,p){
			console.log("resist before main "+p);
				parentSwiper.swipePrev();
		}
	});
	var swiper1 = new Swiper('.swiper-nested-1');
	var swiper2 = new Swiper('.swiper-nested-2');
	var swiper3 = new Swiper('.swiper-nested-3');

  document.ontouchmove = function(e){ e.preventDefault(); }
});