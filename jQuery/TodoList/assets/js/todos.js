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
$("ul").on("click", "li",function(){// add a lsner to an element that exists when a page loads, but we are lsning to the li's inside that ul
  $(this).toggleClass("completed");
});
//click on x to delete todo
//when we click on a span
$("ul").on("click","span",function(event){
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
    //giv val an empty sting as a setter
    $(this).val("");//clears
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")//select one ul and take the string and add it to ul as html
  }
});


//the updates are basically the following;
  //we were unable to use the delete function on new appended lis
  // so we use on rather than .click that specifies lis in the future
  // so we add event lsners to the elements that exists when page loads to we can account for them in the tdoo
