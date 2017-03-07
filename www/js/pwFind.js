/**
 * pwFind.js
 */

$(function(){
	$(".pwFindBtn").on("click",function(){
		var formData = $("form").serialize();
		$.ajax({
			url:"findPw",
			method:"POST",
			data:formData,
			success:function(result){
				console.log(result)
				if(result){
					location.href="rePw";
				}else{
					alert("회원정보가 다릅니다.");
				}
			}
		});
	})
})