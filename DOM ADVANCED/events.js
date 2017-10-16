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
