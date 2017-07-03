function loadPhotoHeader(){
	$('#main-header').load('view/photo.html #photo-header' , function(){
		
	})
}

function loadPhotoBody(){
	$('#main-body').load('view/photo.html #photo-body' , function(){
//		window.onload=document.addEventListener('plusready', function(){
   			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
   			$('#avatar').on('touchend' , function(){ 
   				plus.nativeUI.actionSheet( {cancel:"取消",buttons:[{title:"拍照"},{title:"从手机相册选择"},{title:"保存图片"},]}, function(e){
		console.log( "User pressed: "+e.index );
		if(e.index==1){
			captureImage();
			
		}else if(e.index==2){
			galleryImg();
			
		}else if(e.index==3){
			
			pickFile();
			
		}
	} );
})
   				
   				
   				
   				
   				
   				//captureImage();
   			
   	})

}

function captureImage(){
	var cmr = plus.camera.getCamera();
   			
   			var res=cmr.supportedImageResolutions[0];
   			var fmt=cmr.supportedImageFormats[0];
   			console.log("Resolution: "+res+", Format: "+fmt);
   			cmr.captureImage(function(path){
   				var url=plus.io.convertLocalFileSystemURL(path);
   				document.getElementById("avatar").src=url;
   			},
   			function(error){      
   			},
   			{resolution:res,format:fmt,index:"1"}
   			);
}
function galleryImg() {
	// 从相册中选择图片
	//console.log("从相册中选择图片:");
    plus.gallery.pick( function(path){
    	var url=plus.io.convertLocalFileSystemURL(path);
   				document.getElementById("avatar").src=url;
    }, function ( e ) {
    	console.log( "取消选择图片" );
    }, {filter:"image"} );
}
function savePicture() {
	plus.gallery.save( "_doc/a.jpg", function () {
		console.log(4);
		alert( "保存图片到相册成功" );
	} );
}
function pickFile(){
   plus.gallery.pick(
      function(path){
         plus.gallery.save('/DCIM/100APPLE/IMG_9999.JPG' ,function(){
         	console.log(4);
            mui.toast('ok');
         }, function(){
            mui.toast('失败');   
         });
      },
      function(e){
      	mui.toast('取消了选择');
      }
      
   );
}

		 
		 