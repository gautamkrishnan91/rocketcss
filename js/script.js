function detectBrowser(){
	document.getElementById('anim').style.display = "block";
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
	if(isMac){
  		document.getElementById('anim').style.webkitAnimationName = "STAR-MOVE1";
	}
	else{
		
	}
}