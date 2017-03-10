/**
 * usreDel.js
 */

$(document).ready(function(){
	$(".userDel").on("click",function(){
		var user ={
				userPw:$("input[name='userPw']").val()
		}
		$.ajax({
			url:ipurl+"delUser",
			method:"POST",
			data:user,
			success:function(result){
				if(result){
					alert("탈퇴가 정상적으로 완료 되었습니다.");
					location.href="index.html";
				}else{
					alert("비밀번호가 다릅니다.");
				}
			}
		});
	})
});
