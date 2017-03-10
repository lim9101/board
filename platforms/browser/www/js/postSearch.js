$("#postcodify_14889380221417945_button").on("click",function(){
  var searchInput = $("postcodify_14889380221417945").val();
  $.ajax({
    method:"GET",
    url:"https://api.poesis.kr/post/search.php?q="+searchInput+"&v=3.4.1&ref=com.nmplus.board",
    success:function(result){
      if(result =! null && result.length == 0){
        $(".postcodify_help").css("display","none");
        $(".postcodify_results postcodify_search_form postcode_search_form").append(result);
      }else{
      }
    }
  });
});
