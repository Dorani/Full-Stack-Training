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
//when we click on a span
$("span").click(function(event){
  //this refers to element clicked on
  //.parent means we are working with the li that encloses the span
  //.fadeOut on the li
  // this refers to the li not the span, then thats removed
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
  event.stopPropagation();//prevents event bubling to other elements
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabing new todo text from input
    var todoText = $(this).val();
    //create new li and add to ul
    $("ul").append("<li>this is a new li that we appended to this ul</li>")//select one ul and take the string and add it to ul as html
  }
});
