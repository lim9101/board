var ipurl = 'http://192.168.1.11:80/board/';

var userSet = function(user){
  $(".id").val(user.userId);
  $(".pw").val();
  $(".name").val(user.userName);
  $(".email").val(user.email);
  $(".phone").val(user.phone);
  if(user.gender == "남"){
    $("input:radio[name='gender']:radio[value='남']").attr("checked",true);
  }else{
    $("input:radio[name='gender']:radio[value='여']").attr("checked",true);
  }
  $(".addNo").val(user.addNo);
  $(".addD").val(user.addD);
}

function sessionInfo(){
	$.ajax({
		url:ipurl+'sessionCheck',
		success:function(user){
			userSet(user);
		}

	});
}

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

var updateValid = function(form){
  form.validate({
		rules:{
      pwQa:{
        required:true
      },
      pwAs:{
        required:true
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
       pwQa:{
         required:"필수로 선택하세요."
       },
       pwAs:{
         required:"필수로 입력하세요."
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
}
