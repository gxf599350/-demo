function loadePersonalHeader(){
	$("#headerId").load("view/personal.html #personal-header",function(){
		$('.headImg').on('touchend',function(){
			
			plus.nativeUI.actionSheet( {cancel:"取消",buttons:[{title:"相机拍摄"},{title:"选择本地图片"}]}, function(e){
		console.log( "User pressed: "+e.index );
		if(e.index==1){
			captureImage();
		}else if(e.index==2){
			galleryImg();
		}
	});
			
			// 拍照
				function captureImage(){
					var cmr = plus.camera.getCamera();
					var res = cmr.supportedImageResolutions[0];
					var fmt = cmr.supportedImageFormats[0];
					cmr.captureImage( function( path ){
						var urls = plus.io.convertLocalFileSystemURL( path );
//						alert( "成功: " + path );
//						alert('将本地URL路径转换成平台绝对路径'+urls);
						$('.headImg').css({background:'url('+urls+') no-repeat',backgroundSize:' .6rem .6rem'});	
					},
					function( error ) {
//						alert( "错误: " + error.message );
					},
					{resolution:res,format:fmt}
					);
				}
			
			//从相册中选择图片
			// 从相册中选择图片 
				function galleryImg(){
					// 从相册中选择图片
					console.log("从相册中选择图片:");
				    plus.gallery.pick( function(path){
//				    	console.log(path);
				    	$('.headImg').css({background:'url('+path+') no-repeat',backgroundSize:' .6rem .6rem'});	
				    }, function ( e ) {
//				    	console.log( "取消选择图片" );
				    }, {filter:"image"} );
				}
			
			
		})	
	})
	
}

function loadePersonalBody(){
	$("#sectionId").load("view/personal.html #personal-body",function(){
		
		
	})
	
}
