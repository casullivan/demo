
	// $("#video").bind('scroll', function(){
	// 	$("html, body").animate({ scrollTop: 0 }, "fast");
	// });

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

			// var bookmarks = [];
		// $(document).ready(function(){
		// 	$('.swiper-slide').each(function(i, obj) { if($(obj).hasClass('bookmark')) bookmarks.push(i); });
		// });

	// $(document).ready(function(){
	// 	$('.swiper-slide').each(function(i, obj) { /*if($(obj).hasClass('b')) */$(obj).attr('data-value',i) });
	// });
	//slide.isActive()
	//$('.swiper-slide').each(function(i, o) { if($(o).attr('id' ,i).hasClass('b')) addToNav(o); });

		  //   var video = document.getElementsByTagName('video')[0];
	  //   if (!video.webkitDisplayingFullscreen)
			// S.startAutoplay();

					// if(e.previousIndex==0){
		// 	$('#navbar').slideDown(100);
		// 	$('#front_page_links').hide();
		// }
		// 	$("#video").get(0).play();
		// window.location.hash=e.activeSlide().id;

		

	// if(window.location.hash!=0)
	//  	goTo(window.location.hash);
			//$('#front_page_links').slideDown(50);
			//$('#front_page_links').hide();