function loadShoesListHeader(){

	$('#shoes-body').load('view/topList.html #shoes-topList-header' , function(){
		
		$.ajax({
			type:"post",
			url:" http://route.showapi.com/213-4?showapi_appid=39624&showapi_sign=7be0eb8a64594cc899e0cde72a1dfeff&topid=5&",
			async:true,
			dataType : 'JSON',
//			data : {
//				pageCode : 0,
//				linenumber : 10
//			},
			beforeSend : function(){
				$('#shoes-topList-header-content').hide()
				$('.refreshing').show();
			},
			success : function(data){
				$('#shoes-topList-header-content').show();
				$('.refreshing').hide();
				var topListObj = JSON.parse(data).showapi_res_body.pagebean.songlist;
				console.log(topListObj);
			for(j=0;j<4;j++){
				for(var i = 3*j; i<3*j+3;i++){				
					var songName = topListObj[i].songname;
					var singerName = topListObj[i].singername;
					//console.log(songName);
					//str="<h4>'+songName+'--'+singerName+'</h4>"
					$('#shoes-topList-header').find('li').eq(2*j+1).append('<h4>'+songName+'--'+singerName+'</h4>')
				}
			}
			}
		});
		
	})
}

//function loadShoesBody(){
//	$('#main-body').load('view/shoes.html #shoes-body' , function(){
//		
//		 var shoesSwiper = new Swiper('.swiper-container' , {
//					autoplay : 3000,
//					loop : true,
//					pagination : '.swiper-pagination'
//				})
//		 
//		 $.ajax({
//			type:"post",
//			url:" http://datainfo.duapp.com/shopdata/getGoods.php",
//			async:true,
//			dataType : 'JSONP',
//			data : {
//				pageCode : 0,
//				linenumber : 10
//			},
//			success : function(data){
//				var listObj = JSON.parse(data.substring(9,data.length-1))
//				//console.log(listObj)
//				
//				for(var i = 0; i<listObj.length;i++){
//					var goodsName = listObj[i].goodsName;
//					var goodsImg = listObj[i].goodsListImg;
//					$('#good-list').append('<li><img src = "'+goodsImg+'"><p>'+goodsName+'</p></li>')
//				}
//			}
//		});
//		 
//		 
//	})
//}

//function test(){
//	alert(1);
//}