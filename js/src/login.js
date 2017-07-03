function loadLoginHeader(){
	$('#main-header').load('view/login.html #account-login-header' , function(){
		
	})
}

function loadLoginBody(){
	$('#main-body').load('view/login.html #account-login-body' , function(){
		 
		$('#Login').on('touchend' , function(){ 
			var usernameL=$("#userNameL").val();
		var passwordL=$("#PasswordL").val();
		 $.ajax({
			type:"post",
			url:" http://datainfo.duapp.com/shopdata/userinfo.php",
			async:true,
			dataType : 'JSON',
			data : {
				status:'login',
				userID:usernameL,
				password:passwordL,
			},
			success : function(data){
			console.log(usernameL);
			console.log(passwordL)
				if(data==0){
					alert("用户名不存在，请注册");
					
				}else if(data==2){
					alert("用户密码不符");
				}else{
					//alert("登录成功");
					loadPhoto();
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
		 
		 