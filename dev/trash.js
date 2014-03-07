
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