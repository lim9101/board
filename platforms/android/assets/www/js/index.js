function sessionCheck(){
	$.ajax({
		url:ipurl+'sessionCheck',
		success:function(result){
			if(result != null && result != ""){
			location.href='postList.html';
			}
		}
	});
}


$(document).ready(function(){
	$(".login").on("click",function(){
		var user = {
				userId:$(".id").val(),
				userPw:$(".pw").val()
		}
		$.ajax({
			url:ipurl+'check',
			data:user,
			success:function(result){
				if(result){
				location.href='postList.html';
				}else{
					alert("로그인실패");
				}
			}
		});
	});

	$(".cansel").on("click",function(){
		location.href='#';
	});

	$(".signIn").on("click",function(){
		location.href='userAdd.html';
	});

	$(".idFind").on("click",function(){
		openPopup("idFind.html","idFind",370,360);
	});

	$(".pwFind").on("click",function(){
		openPopup("pwFind.html","pwFind",370,360);
	});

});
