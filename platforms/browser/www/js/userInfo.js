/**
 * userInfo.js
 */
// var checkfunction = function(result,url){
// 	if(result){
// 		location.href=url+".html";
// 	}else{
// 	}
// }

$(document).ready(function(){
	$(".canselBtn").on("click",function(){
		location.href="postList.html";
	});
	$(".updateBtn").on("click",function(){
		// openPopup("userCheck.html","check",370,360);
		location.href="userCheck.html";
	})
	$(".userDelBtn").on("click",function(){
		// openPopup("userDel.html","delCheck",370,360);
		location.href="userDel.html";
	})
	sessionInfo();
});
