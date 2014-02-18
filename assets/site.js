$(function() {
  $('#demo1').slidesjs({
    width: 235,
    height: 88,
    auto: false,
    restartDelay: 2500,
    navigation: false
  });

  $('#demo2').slidesjs({
    width: 235,
    height: 88,
    auto: false,
    restartDelay: 2500,
    navigation: false,
    callback:{
    	loaded: function(n){
    	}
    }
  });
  document.ontouchmove = function(e){ e.preventDefault(); }
});