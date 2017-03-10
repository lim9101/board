var check=0;
var searchInput="";

$(document).ready(function(){
	var chkId = function (form){
		if(signInValidate(form)){
			form.css("desabled",true);
		}else{
			form.css("desabled",false);
		}
	}
	$(".id").keyup(function(){$(this).val( $(this).val().replace(/[^\!-z]/g,"") );} );
	chkId($("form"));
	$(".signIn").on("click",function(){
		if(signInValidate($("form"))){
			var user = {
					userId:$(".id").val(),
					userPw:$(".pw").val(),
					userName:$(".name").val(),
					email:$(".email").val(),
					phone:$(".phone").val(),
					gender:$("input[name='gender']").val(),
					addNo:$(".addNo").val(),
					addD:$(".addD").val()+$(".addD2").val(),
					pwQa:$(".pwQa").val(),
					pwAs:$(".pwAs").val()

			}
			  $.ajax({
					url:ipurl+"signIn",
					data:user,
					success:function(result){
						if(result){
							alert("가입성공");
							location.href="postList.html";
						}else alert("가입 실패")
					}
				});
		}
	})

	$("#inhtml").load("search.html");

	$("#findAddress").on("click",function(){
		$(".postcodify_popup_background").css("display","block");
		$(".postcodify_popup_layer").css("display","block");
	});
});
