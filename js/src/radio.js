function loadRadioHeader(){
	$("#main-header").load('view/radio.html #radio-header',function(){
		
	})
}

function loadRadioBody(){
	$("#main-body").load('view/radio.html #radio-body',function(){
		
		$.ajax({
			type:"post",
			url:" http://route.showapi.com/1208-3?showapi_appid=39624&showapi_sign=7be0eb8a64594cc899e0cde72a1dfeff&id=100&",
			async:true,
			dataType : 'JSON',
			beforeSend : function(){
				$('#img-list').hide()
				$('.refreshing').show();
			},
//			data : {
//				pageCode : 0,
//				linenumber : 10
//			},
//			success : function(data){
//				var listObj = JSON.parse(data.substring(9,data.length-1))
//				console.log(listObj)
//				
//				for(var i = 0; i<listObj.length;i++){
//					var goodsName = listObj[i].goodsName;
//					var goodsImg = listObj[i].goodsListImg;
//					$('#good-list').append('<li><img src = "'+goodsImg+'"><p>'+goodsName+'</p></li>')
//				}
//			}
			
			success : function(data){
				$('#img-list').show()
				$('.refreshing').hide()
				console.log(JSON.parse(data).showapi_res_body.data);
				//console.log(JSON.parse(data).data);
				var imgObj = JSON.parse(data).showapi_res_body.data;

				for(var i = 0; i<imgObj.length;i++){
					var imgUrl = imgObj[i];
					
					$('#img-list').append('<li><img src = "'+imgUrl+'"></li>')
				}
				console.log(imgUrl);
			}
		});
	})
}
