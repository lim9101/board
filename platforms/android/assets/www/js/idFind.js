$(document).ready(function(){
	 $(".idFindBtn").on("click",function(){
		 var formData = $("form").serialize();
		 if($(".userName").val()=="" || $(".pwAs").val()=="" || $(".phone").val()==""){
			alert("정보를 입력하세요.");
		 }else{
			 $.ajax({
					method:"POST",
					url:ipurl+"findId",
					data:formData,
					success:function(user){
						if(user.userId=='' || user.userId==null || user.userId==undefined){
							alert("동일정보의 회원이 없습니다.");
						}else{
							alert("당신의 id는"+user.userId+"입니다.");
							window.open("","idFind","");
							window.close();
						}
					}
				});
		 }


	});
});
