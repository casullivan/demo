<?php 
//error_reporting(E_ALL);
//ini_set('display_errors', True);

include("framework/head.php"); ?>
<div id="tray" class="header container" style="color:white; height:100px">
	<div style="float:left;margin-top: 1px;"><a href="/"><div><img id='logo' src="/images/logo.png" height="30" alt="BRAVE"/></div></a></div>

</div>
<div class="parent-swiper swiper-container">
	<div class="swiper-wrapper">
		<?php
			include("slides/A_index/index.php"); 
		?>
	</div>
</div>

<?php include("framework/foot.php"); ?>