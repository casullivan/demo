<?php 
//error_reporting(E_ALL);
//ini_set('display_errors', True);

include("framework/head.php"); ?>
<div class="parent-swiper swiper-container">
	<div class="swiper-wrapper">
		<?php

		class SortIterator extends SplHeap{
		    public function __construct(Iterator $iterator){
		        foreach ($iterator as $item) $this->insert($item);
		    }
		    public function compare($b,$a){
		        return strcmp($a->getRealpath(), $b->getRealpath());
		    }
		}

		$dit = new RecursiveDirectoryIterator("./slides");
		$rit = new RecursiveIteratorIterator($dit);
		$sit = new SortIterator($rit);
		$files = new RegexIterator($sit, '/^.+\.php$/i', RecursiveRegexIterator::GET_MATCH);
		foreach ($files as $file) include(implode('|', $file));

		?>
	</div>
</div>

<?php include("framework/foot.php"); ?>