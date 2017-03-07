var temp=false;
var comentsHiden = function(){
	temp = !temp;
	if(temp){
		$(".comentLine").css("display","block");
	}else{
	$(".comentLine").css("display","none");
}
}

var comentAdd =function(coment){
	if($(".comentContent").val().length > 200){
		alert("200자까지 가능합니다.");
		return;
	}
	if($(".comentContent").val()==""){
		alert("내용을 입력하세요.");
	}else{
		$.ajax({
			method:"POST",
			url:"comentAdd",
			data:coment,
			success:function(result){
				comentView(coment);
				$(".comentContent").val("");
			}
		});
	}

}
var updateArea = function(cNo){
	$(cNo).parent().parent().empty().append($("<textarea id='content'"+
			" class='comentContent' name='content' cols='65' rows='6'>"+
			"</textarea><span style='position:relative; top:-64px;right:-4px'><button type='button'  style='display:inline' onclick='updateComent(this)' class='updateBtn' value='"+$(cNo).val()+"'>댓글수정</button><button type='button'  style='position:relative; right:-450px' onclick='canselArea()' class='canselBtn'>취소</button></span>"));
}

var comentRepleArea = function(cNo){
	$(cNo).parent().parent().empty().append($("<textarea id='content'"+
			" class='comentContent' name='content' cols='65' rows='6'>"+
			"</textarea><span style='position:relative; top:-64px;right:-4px'><button type='button'  style='display:inline' onclick='repleComent(this)' class='comentRepleAddBtn' value='"+$(cNo).val()+"'>댓글입력</button><button type='button'  style='position:relative; right:-450px' onclick='canselArea()' class='canselBtn'>취소</button></span>"));
}

var updateComent = function(cNo){
	var coment ={
			cNo:$(cNo).val(),
			content:$(".comentContent").val()
	}
	$.ajax({
		method:"POST",
		url:"updateComent",
		data:coment,
		success:function(result){
			$(".comentLine").empty();
			comentView(null);
		}
	});
}

var repleComent = function(cNo){

	console.log($(cNo).val());
	var coment= {
			scNo:$(cNo).val(),
			pNo:"${pdto.pNo}",
			userId:"${user.userId}",
			content:$(".comentContent").val()
	}
	comentAdd(coment);
}

var comentDel = function(cNo){

	var coment ={
			cNo:$(cNo).val()
	}
	$.ajax({
		method:"POST",
		url:"delComent",
		data:coment,
		success:function(result){
			$(".comentLine").empty();
			comentView(null);
		}
	});
}

var canselArea = function(){
	comentView(null);
}

var comentList=function(coment){
	var div = $("<div class='replyDiv' style='border:1px solid black;padding-left:7px;border-width:2px 1px; width:510px; height: auto; line-height:35px; position:relative'></div><br>");
	var dateIn= $("<span>"+"입력날짜:"+coment.dateIn+"</span>&nbsp;&nbsp;<span>"+"수정날짜:"+coment.dateUp+"<span><br>");
	if(coment.dateUp == null){
		dateIn= $("<span>"+coment.userId+"</span>  <span>"+"입력날짜:"+coment.dateIn+"</span>&nbsp;&nbsp;<span>"+"수정날짜:"+""+"<span><br>");
	}else{
	}
	var adminContent=$("<span>"+coment.content+"</span>"+
			"<span><button type='button' onclick='comentDel(this)' value='"+coment.cNo+"'>삭제</button></span><br>");
	var contentUser=$("<span>"+coment.content+"</span>"+
	"<span><button type='button' onclick='comentRepleArea(this)' value='"+coment.cNo+"'>댓글</button>"+
	"<button type='button' onclick='updateArea(this)' value='"+coment.cNo+"'>수정</button>"+
	"<button type='button' onclick='comentDel(this)' value='"+coment.cNo+"'>삭제</button></span><br>");
	var reContentUser=$("<span>"+coment.content+"</span>"+
			"<span><button type='button' onclick='updateArea(this)' value='"+coment.cNo+"'>수정</button>"+
			"<button type='button' onclick='comentDel(this)' value='"+coment.cNo+"'>삭제</button></span><br>");
	var content=$("<span>"+coment.content+"</span><br>");
	var reContent=$("<span>"+coment.content+"<button type='button' onclick='comentRepleArea(this)' value='"+coment.cNo+"'>댓글</button>"+"</span><br>");

	if(coment.userId == "${user.userId}"){
		if(coment.scNo == coment.cNo){
			div.append(dateIn);
			div.append(contentUser);
			$(".comentLine").append(div);
		}else{
			div.css("margin-left","200px");
			div.append(dateIn);
			div.append(reContentUser);
			$(".comentLine").append(div);
		}
	}else if("${user.userId}" == "admin"){
		if(coment.scNo == coment.cNo){
			div.append(dateIn);
			div.append(adminContent);
			$(".comentLine").append(div);
		}else{
			div.css("margin-left","200px");
			div.append(dateIn);
			div.append(adminContent);
			$(".comentLine").append(div);
		}
	}else{
		if(coment.scNo == coment.cNo){
			div.append(dateIn);
			div.append(reContent);
			$(".comentLine").append(div);
		}else{
			div.css("margin-left","200px");
			div.append(dateIn);
			div.append(content);
			$(".comentLine").append(div);
		}

	}

}
	var comentView = function(coment){

		if(coment == null){
			var coment ={
					pNo:"${pdto.pNo}"
			}
		}

	$.ajax({
	url:"getComents",
	data: coment,
	success:function(coments){
		$(".comentHiden").text("댓글"+"("+coments.length+")");
		$(".comentLine").empty();
		$(coments).each(function(idx,coment){
				comentList(coment);
		});
	}
});
}
	comentView(null);


function updateClick(){
	if(confirm("수정하시겠습니까?")==true){
		location.href="postUpdate?pNo=${pdto.pNo}";
	}else{
		return;
	}
}

function deleteClick(){
	if(confirm("삭제하시겠습니까?")==true){
		location.href="postDelete?pNo=${pdto.pNo}&spNo=${pdto.spNo}&depth=${pdto.depth}&fileNo="+$('.fileNo').val()+"&plevel=${pdto.plevel}";
	}else{
		return;
	}
}
$(document).ready(function(){

	$(".comentAddBtn").on("click",function(){
		var scNo = 0;
		var coment= {
				scNo:scNo,
				pNo:"${pdto.pNo}",
				userId:"${user.userId}",
				content:$(".comentContent").val()
		}
		comentAdd(coment);
	});
});
