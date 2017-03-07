/**
 * usreDel.js
 */

$(document).ready(function(){
	$(".userDel").on("click",function(){
		var user ={
				userPw:$("input[name='userPw']").val()
		}
		$.ajax({
			url:"delUser",
			method:"POST",
			data:user,
			success:function(result){
				if(result){
					opener.checkfunction(result,"index");
					 window.open("","check","");
						window.close();
				}else{
					alert("비밀번호가 다릅니다.");
				}
			}
		});
	})
});