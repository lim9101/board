/**
 * userCheck.js
 */

$(document).ready(function(){
	$(".checkBtn").on("click",function(){
		var user={
				userPw:$("#userPw").val()
		}
		$.ajax({
			url:ipurl+"check",
			data:user,
			success:function(result){
				if(result){
					location.href="userUpdate.html";
				}else{
					alert("비밀번호가 같지 않습니다.");
				}

			}
		});

	})
});
