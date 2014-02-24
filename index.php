<?php 
error_reporting(E_ALL);
ini_set('display_errors', True);

include("framework/head.php"); ?>

<div class=" parent-swiper swiper-container" data-count="3">
	<div class="swiper-wrapper">
		<?php
			$slidesDirectory = new RecursiveDirectoryIterator(realpath('slides'));
			$Iterator = new RecursiveIteratorIterator($slidesDirectory);
			$php_files = array_reverse(iterator_to_array(new RegexIterator($Iterator, '/^.+\.php$/i', RecursiveRegexIterator::GET_MATCH)));
			foreach ( $php_files as $filename => $file) include($filename); 
		?>
	</div>
</div>
<script type="text/javascript">
	//var bookmarks = [0, 3, 7];
</script>
<?php include("framework/foot.php"); ?>