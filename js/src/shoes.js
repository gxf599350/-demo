function loadShoesHeader(){
	$('#main-header').load('view/shoes.html #shoes-header' , function(){
		$('#bofang').on('touchend',function(){
			//alert(1);
		loadPlayback();
		
	})
		
	})
}

function loadShoesBody(){
	$('#main-body').load('view/shoes.html #shoes-body' , function(){
		
		 var shoesSwiper = new Swiper('.swiper-container' , {
					autoplay : 3000,
					loop : true,
					pagination : '.swiper-pagination'
				})
		 
		 $.ajax({
			type:"post",
			url:" http://datainfo.duapp.com/shopdata/getGoods.php",
			async:true,
			dataType : 'JSONP',
			data : {
				pageCode : 0,
				linenumber : 10
			},
			success : function(data){
				var listObj = JSON.parse(data.substring(9,data.length-1))
				//console.log(listObj)
				
				for(var i = 0; i<listObj.length;i++){
					var goodsName = listObj[i].goodsName;
					var goodsImg = listObj[i].goodsListImg;
					$('#good-list').append('<li><img src = "'+goodsImg+'"><p>'+goodsName+'</p></li>')
				}
			}
		});
		 
		 
	})
}

function test(){
	loadShoesListHeader();
}
$('#bofang').on('click',function(){
		alert(1);
		
		loadPlaybackHeader();
		loadPlaybackBody();
		
	})
			 
		 