/**
 * pwFind.js
 */

$(function(){
	$(".pwFindBtn").on("click",function(){
		var formData = $("form").serialize();
		$.ajax({
			url:ipurl+"findPw",
			method:"POST",
			data:formData,
			success:function(result){
				console.log(result)
				if(result){
					location.href="rePw.html";
				}else{
					alert("회원정보가 다릅니다.");
				}
			}
		});
	})
})
