demo | demo
====
<h3>Recommends</h3> 
<h4>Server</h4>
<ul><li>PHP 5.3</li>
	<li>Apache 2.2.22</li>
	<li>.htaccess</li>
</ul>
<h4>Client</h4>
<ul><li>iOS 7.0 (HTML5, CSS3, H.264, appcache capable, mobileviewport)</li>
	<li>1024x768px</li>
	<li>Safari webapp</li>
	<li>Mercury Browser 8.2 https://itunes.apple.com/ca/app/mercury-web-browser/id331012646</li>
</ul>
<h3>Enviroment</h3> 
sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install apache2 php5 avahi-daemon -y
sudo nano /etc/avahi/avahi-daemon.conf # insert hostname
<br/>
<h3>Resources</h3> 
http://www.idangero.us/sliders/swiper/api.php
https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
<h3>Usage</h3>
Link to another slide 


```html
<a onclick="goTo('#red')">link to id red</a>
```

Low bar template
```html
<div class="lol lower_bar">
	<ul>
		<li><a onclick="goTo('#stamping-1-before')"><h2 class="text active">BEFORE</h2></a></li>
		<li><a onclick="goTo('#stamping-1-build')"><h2 class="text">BUILD</h2></a></li>
		<li><a onclick="goTo('#stamping-1-after')"><h2 class="text">AFTER</h2></a></li>
	</ul>
</div>
```

Index page template
```html
<div class="swiper-slide light" style="" id="stamping">
	<div class="a16x9c">
		<div class="a16x9 content">
			<div class="index_links">
				<div style=""><h1>STAMPING</h1></div>
			</div>

		</div>
	</div>
</div>
```

Scaffolding template
```html
<div style="background:transparent" class="swiper-slide b light">
	<div class="a16x9c">
		<div class="a16x9 container-fluid">
		<div class="row-fluid">
			<t class="go" data-go="#a2">link to id 2</t>
			<a onclick="goTo('#red')">link to id red</a>
				<t data-go="#a2" class="col-md-8">
					<p class="go" data-go="#a2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mi nec massa tristique tincidunt. Nulla tristique orci non posuere convallis. Proin dapibus lorem vitae neque auctor laoreet. In hac habitasse platea dictumst. Aenean tincidunt purus eu tellus ornare pretium imperdiet nec magna. Curabitur sem diam, facilisis eu porta mollis, cursus nec purus. Donec vulputate euismod accumsan. Maecenas a malesuada nisl. Donec ac porta ante.</p>
					<p>
					In sit amet molestie dolor. Curabitur vulputate, odio at auctor rutrum, elit magna rutrum justo, et scelerisque sapien massa quis augue. Fusce sed dolor et tortor tempor blandit id sed lectus. Sed tempor risus quis quam bibendum hendrerit. Sed vitae ipsum tristique, congue nunc ut, ornare ligula. Integer mattis pharetra quam id luctus. Nunc egestas enim purus, at pharetra nisl convallis sed. Fusce vehicula lacus a libero consectetur, in ultrices neque varius. Ut lacus lectus, bibendum vitae semper eu, vulputate et elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sagittis, tortor sit amet ornare molestie, felis eros consectetur lacus, ut egestas purus neque nec tortor. Proin enim erat, volutpat quis dapibus quis, commodo at orci. Nulla facilisi. Donec non eros eros. Fusce bibendum tortor nulla, non mollis libero aliquet id. Nunc in arcu velit.		
					</p>
				</t>
			<div class="col-md-4">.col-md-4</div>
		</div>
		<div class="row-fluid">
		  <div class="col-md-4">.col-md-4</div>
		  <div class="col-md-4">.col-md-4</div>
		  <div class="col-md-4">.col-md-4</div>
		</div>
		<div class="row-fluid">
		  <div class="col-md-6">.col-md-6</div>
		  <div class="col-md-6">.col-md-6</div>
		</div>
		</div>
	</div>
</div>
```

Video template
```html
<div class="swiper-slide video">
	<div class="a16x9c">
		<div class="a16x9">
			<video id="video" src="/slides/demo2/TR12_AFTER.MP4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' style="margin-top:-20px; z-index:1" id="video1" width="1024" height="580" preload x-webkit-airplay="disallow" />
		 </div>
		 <div class="video_controls">
			<div class="pause_play">&nbsp;</div>
			<div class="replay">&nbsp;</div>
		</div>
	</div>				
</div>
```


Photo template
```html
<div class="swiper-slide photo" >
	<div class="a16x9c" style="background:url('');">
		<div class="a16x9">
			other content
		 </div>
	</div>				
</div>
```

<br/>
<h3>TODO</h3>
generate bookmarks array in PHP 
https://github.com/JeffreyWay/Compress-and-Concatenate-Stylesheets-with-PHP
cleanup bootstrap
remove jquery