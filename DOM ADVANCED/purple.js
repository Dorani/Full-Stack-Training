//when we click on the button
//the entire page background turns purple
//if the page is already purple make it white


var button = document.querySelector('button');
var isPurple = false; //start off like this
//assign-isolate-select

button.addEventListener('click', function(){
  document.body.style.background = 'purple';
});
