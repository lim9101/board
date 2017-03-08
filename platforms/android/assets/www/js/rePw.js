/**
 * rePw.js
 */
$(function(){
	$(".pwChangeBtn").on("click",function(){
		var formData = $("form").serialize();
		if($("input[name='userPw']").val() == $("input[name='userRePw']").val()){
			$.ajax({
				method:"POST",
				url:ipurl+"updateUser",
				data:formData,
				success:function(result){
					if(result){
						alert("비밀번호가 변경되었습니다.");
						 window.open("","rePw","");
							window.close();
					}else{
						alert("실패");
					}
				}
			});
		}else{
			alert("두 비밀번호가 일치하지 않습니다.");
		}

	})
});
