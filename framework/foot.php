	<div id = "footer"></div>
	</div>
	<script src="/assets/jquery-1.11.0.js" type="text/javascript"></script>
	
	<script type="text/javascript">
	var bookmarks = [];
	$(document).ready(function(){
		$('.swiper-slide').each(function(i, obj) { if($(obj).hasClass('bookmark')) bookmarks.push(i); });
	});
	</script>
	<script src="/assets/swiper/idangerous.swiper.js" type="text/javascript"></script>
	<script src="/assets/jquery.touchSwipe.js" type="text/javascript"></script>
	<script src="/assets/site.js" type="text/javascript"></script>

</body>
</html>