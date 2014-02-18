$(function() {
  $('#demo1').slidesjs({
    width: 235,
    height: 88,
    play:{
	    restartDelay: 500,
	    auto: true
	},
    navigation: false
  });

  $('#demo2').slidesjs({
    width: 235,
    height: 88,
    play:{
	    restartDelay: 500,
	    auto: true
	},
    navigation: false,
    callback:{
    	loaded: function(n){
    	}
    }
  });
  document.ontouchmove = function(e){ e.preventDefault(); }
});