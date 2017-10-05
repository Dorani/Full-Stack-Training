//check off specific todos by clicking
// $("li").click(function(){
//   //if li is gray
//   if($(this).css("color") === "rgb(128, 128, 128)"){
//       // turn it black
//       $(this).css({
//         color: "black",
//         textDecoration: "none"
//       });
//     }
//     // else turn it grey
//     else {
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//     });
//   }
// });

//above code 1 click event and a method:
$("li").click(function(){
  $(this).toggleClass("completed");
});
//click on x to delete todo
$("span").click(function(event){
  $(this).parent().remove();
  event.stopPropagation();
});
