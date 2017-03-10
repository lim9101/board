/**
 * userUpdate.js
 */

$(document).ready(function(){
	sessionInfo();
	$(".canselBtn").on("click",function(){
		location.href="postList.html";
	});
	$(".updateBtn").on("click",function(){
		if(updateValid($("form"))){
			var formData = $("form").serialize();
		 $.ajax({
			 method:"POST",
			 url:ipurl+"updateUser",
			 data:formData,
			 success:function(result){
				 console.log(result);
				 if(result){
					 alert("정보수정 성공");
					 location.href="postList.html";
				 }else{
					 alert("정보수정 실패");
				 }

			 }
		 });
	 }else{
		 alert("입력하지 않은 부분이 있습니다.");
	 }
	});

	$(".findAddress").postcodifyPopUp();
});
