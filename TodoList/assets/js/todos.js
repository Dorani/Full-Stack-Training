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

//above code in 1 line:

$("li").click(function(){
  $(this).toggleClass("completed");
});
