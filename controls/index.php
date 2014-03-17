<?php include("../framework/head.php"); ?>
<div id="tray" class="header container" style="color:white">
	<div style="float:left;margin-top: 1px;"><a href="/"><div><img id='logo' src="/images/logo.png" height="30" alt="BRAVE"/></div></a></div>
		<ul id="navbar">
			<li class="stamping"><a href="/stamping" target="_self"><h1>STAMPING</h1></a></li>
			<li class="controls"><a href="#" onclick="specific(0,0); return false;" target="_self"><h1>CONTROLS</h1></a></li>
			<li class="casting"><a href="/casting" target="_self"><h1>CASTING</h1></a></li>
			<li class="motion"><a href="/motion" target="_self"><h1>MOTION</h1></a></li>
		</ul>
</div>
<div class="parent-swiper swiper-container">
	<div class="swiper-wrapper">
		<?php include("../slides/C_controls/index.php");?>
	</div>
</div>

<?php include("../framework/foot.php"); ?>