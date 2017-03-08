var check=0;
var signInValidate = function(form){
	form.validate({
		rules:{
			userId:{
				required:true,
				minlength:6,
				maxlength:15,
				remote:{ type: "get", url: "checkId" }
			},
			userPw:{
				required:true,
				minlength:6,
				maxlength:20
			},
			userPwCheck:{
				equalTo : $(".pw")
			},
			email:{
				required:true,
				email:true,

			},
			phone:{
				required:true,
				digits:true
			},
			address:{
				required:true
			}
		},
		 messages : {
             userId: {
                 required : "필수로입력하세요. 영문,숫자,특수문자만 입력할수 있습니다.",
                 minlength:"최소{0}자로 입력하세요.",
 				maxlength:"최대{0}자로 입력하세요.",
 				remote:"사용할수 없는 아이디입니다."

             },
             userPw: {
                 required : "필수로입력하세요",
                 minlength:"최소{0}자로 입력하세요.",
  				maxlength:"최대{0}자로 입력하세요."

             },
             userPwCheck: {
                 required : "필수로입력하세요",
                 equalTo : "비밀번호가 같지않습니다."

             },
			email:{
				required:"필수로 입력하세요.",
				email:"이메일 형식에 마추어 입력하세요.",

			},
			phone:{
				required:"필수로 입력해주세요.",
				digits:"숫자만 입력하세요."
			},
			address:{
				required:"필수로 입력해주세요."
			}
         }
	});
	return form.valid();
};
var chkId = function (form){
	if(signInValidate(form)){
		form.css("desabled",true);
	}else{
		form.css("desabled",false);
	}
}
$(document).ready(function(){
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

	$("#findAddress").postcodifyPopUp();

});
