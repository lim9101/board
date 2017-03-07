var ipurl = 'http://192.168.1.11:80/board/';
// var sessionCheck = function(){
// 	var session = "${user}";
// 	if(session != ""){
// 		console.log(session);
// 		 location.href="postList.html";
// 	}
// }
// sessionCheck();
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
		openPopup("idFind","idFind",370,360);
	});

	$(".pwFind").on("click",function(){
		openPopup("pwFind","pwFind",370,360);
	});

});
