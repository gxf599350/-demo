function loadAccountHeader(){
	$('#main-header').load('view/account.html #account-header',function(){
		
	})
}
function loadAccountBody(){
	$('#main-body').load('view/account.html #account-body',function(){
		
	})
}
function loadLogin(){
	loadLoginHeader();
	loadLoginBody();
}
function loadResister(){
	loadResisterHeader();
	loadResisterBody();
	
}
function loadPlayback(){
	loadPlaybackHeader();
	loadPlaybackBody();
}
function loadPhoto(){
	loadPhotoHeader();
	loadPhotoBody();
}
