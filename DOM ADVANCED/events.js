//events are everywhere
//click, hover, drag and drop, press double-clicks etc
  //run codes that changes an element when engaged with

//we select an element
  //the manipulation that happens will be the event lsner
  //then attach an event listener

//to add a listener, we use a method called addEventListener(type, functionToCall);

var button = document.querySelector('button');
button.addEventListener('click', function(){
  console.log("somone clicked the button!");
});
//call addEventListener on it
//give it 2 arguments
  // type of event we want to listen for
  // code we want to run when that event takes place, ie a callback function, which only runs when event is fired


//-----------------------------------------------

//displaying a message when a button is clicked
<button>click me</button>
<p>no one has clicked me yet</p>

//what do we do 1st?
//assign and select
var button = document.querySelector('button');
var paragraph = document.querySelector('p');

//setup click listener

button.addEventListener('click',function(){
  paragraph.textContent = 'soneone clicked me';
});
//click lsner, the callback function, when clicked, we changed the paragraph to someonone clicked
//simple


// say we have a list of lis we want to adjust
// start by selecting the list
var lis = document.querySelectorAll('li');
// now we need to loop through the list
for(var i = 0; i<lis.length; i++){
  lis[i].addEventListener('click', function(){ //click event on lis indivisual, function excecuted
    this.style.color = 'purple' //this refers to the element selected, then we are adjusting the styles
  });
}
