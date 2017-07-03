$('#main-footer').load('view/mainfooter.html' , function(){
	loadShoesHeader();
	
	loadShoesBody();
	
	
	console.log($('#main-footer').find('li').eq(0))
	$('#main-footer').find('li').eq(0).addClass('active')
	
	$('#main-footer').find('li').on('touchend' , function(){
		var activeIndex = $(this).index()
		
		console.log(activeIndex)
		
		switch(activeIndex){
			case 0 : 
				loadShoesHeader();
				loadShoesBody()
				break;
			case 1 : 
				loadBookHeader();
				loadBookBody();
				break;
			case 2 : 
				loadRadioHeader();
				loadRadioBody();
				break;
			case 3 : 
				loadAccountHeader();
				loadAccountBody();
				break;
			
		}
	$(this).addClass('active').siblings().removeClass('active')	
	})
	
	
})