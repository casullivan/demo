$(function() {
  $('#demo1').slidesjs({
    width: 235,
    height: 88,
    navigation: false
  });

  $('#demo2').slidesjs({
    width: 235,
    height: 88,
    navigation: false,
    callback:{
    	loaded: function(n){
    		$(document).bind('touchmove', false);
    	}
    }
  });

  $(document).bind('touchmove', false);
  //document.ontouchmove = function(e){ e.preventDefault(); }
});