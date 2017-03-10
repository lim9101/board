function addClick(temp){
	$(".postcodify_popup_layer").css("display","none");
	$(".postcodify_popup_background").css("display","none");
	$(".addNo").val($(temp).find(".code5").text());
	$(".addD").val($(temp).find(".address>.selector>.address_info").text()+
	$(temp).find(".address>.selector>.extra_info").text());
}
$(document).ready(function(){
  
  $(".close_button").on("click",function(){
		$(".postcodify_popup_layer").css("display","none");
		$(".postcodify_popup_background").css("display","none");
	})

	$("#postcodify_14890419691043721_button").on("click",function(){
		searchInput=$("#postcodify_14890419691043721").val();
		$.ajax({
			url:"https://api.poesis.kr/post/search.php",
			method:"GET",
			data:{q:searchInput,v:"3.4.1",ref:"board.local"},
			dataType: 'json',
			success:function(datas){
				$("#searchForm").empty();
				if(datas.results.length == 0){
					$("#searchForm").html("<div>찾으시는 주소가 없습니다.</div>");
				}else{
					$(datas.results).each(function(idx,result){
						var postcodify = $('<div class="postcodify_search_result postcode_search_result" onClick="addClick(this)">'+
						'<div class="code6">'+result.postcode6+'</div>'+
						'<div class="code5">'+result.postcode5+'</div>'+
						'<div class="address"><a class="selector"><span class="address_info">'+result.ko_doro+'</span><span class="extra_info">'+result.building_name+' '+result.building_nums+'</span></a></div>'+
						'<div class="old_addresses">'+result.other_addresses+'</div>'+
						'<div class="map_link"><a target="_blank" href="http://map.daum.net/?map_type=TYPE_MAP&amp;urlLevel=3&amp;q='+result.ko_common+' '+result.ko_doro+'">지도</a></div></div>');
						$("#searchForm").append(postcodify);
					});
				}
			}
		});
	});
});
