/**
 * userUpdate.js
 */

$(document).ready(function(){
	$(".canselBtn").on("click",function(){
		location.href="postList";
	});
	$(".updateBtn").on("click",function(){
		 var formData = $("form").serialize();
		$.ajax({
			method:"POST",
			url:"updateUser",
			data:formData,
			success:function(result){
				console.log(result);
				if(result){
					alert("정보수정 성공");
					location.href="postList";
				}else{
					alert("정보수정 실패");
				}
				
			}
		});
	});
	
	$(".findAddress").postcodifyPopUp();

});