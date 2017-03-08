var fileCheck = "${fn:length(adto)}";
var delFileInput =	function (fileDel){
	$(fileDel).parent().remove();
	fileCheck--;

}
var delFile=function(fileNo){
	$.ajax({
		method: "get",
		url: ipurl+"delFile",
		data: {file_no:$(fileNo).val()},
		success: function(result){
			$(fileNo).parent().parent().remove();
			fileCheck--;
		}
	});
}
$(document).ready(function(){
	$('.cancel').bind('click', function(){
		if(confirm("취소하시겠습니까?")==true){
		history.go(-1)();
		}else{
			return;
		}
	});


	$('.postUpdateBtn').bind('click',function(){
	/* 	$('#frmU').attr('action', 'postUpdate').submit(); */


		if(confirm("수정하시겠습니까?")==true){

			if($('[name=title]').val().length > 30){
				alert("제목은 30자까지 가능합니다.");
				return false;
			}

			if($('[name=content]').val().length > 1000){
				alert("내용은 1000자까지 가능합니다.");
				return false;
			}

				var formData = new FormData($('#frmU')[0]);
				formData.set("content",CKEDITOR.instances.content.getData());
				$.ajax({
					method:'post',
					url:ipurl+'postUpdate',
					data:formData,
					processData: false,
					contentType: false,
					success:function(result){
					if(result){
						location.href="postList.html";
					}else{
						alert("이미지파일이 아닙니다.");
					}
				}

			});
		}else{
			return;
		}
	});

	$('.fileAdd').bind('click',function(){
		if(fileCheck==0 || fileCheck<3){
			str="<div><input type='file' id='filepath' name='upload' class='form-control upload' /><button type='button'"
				+" onclick='delFileInput(this)' class='fileDel'>X</button></div>";
				$('.tdAddFile').append(str);
				fileCheck++
		}else{
			alert("파일추가는 3개까지만 가능합니다.");
			return false;
		}
	});
})
