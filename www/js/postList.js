$.ajax({
	url:ipurl+'sessionCheck',
	success:function(result){
		if(result != null && result != ""){
		$(".info").text(result+"님이 로그인하셨습니다.");
		}
	}
});

$(document).ready(function(){
		$('[name=searchBtn]').bind("click",function(){
			$('form').attr('action','postList');
			$('form').submit();
		});

		$('[name=searchWord]').val('${pv.searchWord}');
		switch('${pv.searchKey}'){
		case 'all':$('[value=all]').prop('selected','selected');
					$('[name=searchWord]').val(''); break;
		case 'title':$('[value=title]').prop('selected','selected');break;
		case 'user_id':$('[value=user_id]').prop('selected','selected');break;
		}
	});
