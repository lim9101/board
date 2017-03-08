/**
 * userInfo.js
 */
var checkfunction = function(result,url){
	if(result){
		location.href=url+".html";
	}else{
	}
}
$(document).ready(function(){
	$(".canselBtn").on("click",function(){
		location.href="postList.html";
	});
	$(".updateBtn").on("click",function(){
		openPopup("userCheck","check",370,360);
	})
	$(".userDelBtn").on("click",function(){
		openPopup("userDel","delCheck",370,360);
	})
});
