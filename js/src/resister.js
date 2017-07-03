function loadResisterHeader(){
	$('#main-header').load('view/resister.html #account-resister-header' , function(){
		
	})
}

function loadResisterBody(){
	$('#main-body').load('view/resister.html #account-resister-body' , function(){
//		
//		 var shoesSwiper = new Swiper('.swiper-container' , {
//					autoplay : 3000,
//					loop : true,
//					pagination : '.swiper-pagination'
//				})
//		var username=$("#userName").val();
//		var password=$("#Password").val();
//		console.log(username);       获取输入框内值时程序写在时间内，否则读取不到；
		
		$('#resister').on('touchend' , function(){ 
			var username=$("#userName").val();
		var password=$("#Password").val();
		 $.ajax({
			type:"post",
			url:" http://datainfo.duapp.com/shopdata/userinfo.php",
			async:true,
			dataType : 'JSON',
			data : {
				status:'register',
				userID:username,
				password:password,
			},
			success : function(data){
				if(data==0){
					alert("用户名已存在，请重新注册");
					
				}else if(data==1){
					loadLogin();
				}else{
					alert("数据库报错");
				}
				

			}
		});
	})

})
}
//
//function test(){
//	loadShoesListHeader();
//}
		 
		 