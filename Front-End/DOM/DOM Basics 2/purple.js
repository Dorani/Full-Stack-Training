// //when we click on the button
// //the entire page background turns purple
// //if the page is already purple make it white
//
//
// var button = document.querySelector('button');
// var isPurple = false; //start off like this
// //assign-isolate-select
//
// button.addEventListener('click', function(){
//   if(isPurple){
//   document.body.style.background = 'white';
// } else {
//   document.body.style.background = 'purple';
// }
//   isPurple = !isPurple;
// });
//
// //we can also toggle the class on and off on the body
// //creating a css class for pruple with

button.addEventListener('click', function(){
  document.body.classList.toggle('purple');
});
