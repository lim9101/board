/**
 * userInfo.js
 */
var checkfunction = function(result,url){
	if(result){
		location.href=url;			
	}else{
	}
}
$(document).ready(function(){
	$(".canselBtn").on("click",function(){
		location.href="postList";
	});
	$(".updateBtn").on("click",function(){
		openPopup("userCheck","check",370,360);
	})
	$(".userDelBtn").on("click",function(){
		openPopup("userDel","delCheck",370,360);
	})
});

