function detectBrowser(){
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
	if(isMac){
  		document.getElementById('anim').style.webkitAnimationName = "STAR-MOVE1";
	}
	else{
		
	}
}