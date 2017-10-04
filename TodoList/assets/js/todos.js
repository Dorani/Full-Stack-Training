//check off specific todos by clicking
$("li").click(function(){
  $(this).css("color", "gray");
  $(this).css("text-decoration", "line-through");
});
