//Assign and Selecting
var tag = document.getElementById('highlight');

//Manipulation
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
//using style property
//even if in css we do not need quotes on the other side stating the property
//its important to remember, this is NOT CSS, this is JS with css properties


//seperation of concerns
//html css and js are each responsible for their domains
//structure, behavior and presentation
//html is pure structure and css is pure style
//js controls behavior



//instead of the above code
// we can define a class in css
//style.css
.some-class {
  color: blue;
  border: 10px solid red;
}

//add the new class to the selected element
var tag = document.getElementById("highlight");
tag.classList.add("some-class");
//classList method to see if element has classes assigned to it
//add is a method
//remove is a method
//.toggle takes a class name and if the element has that class already it will then remove, if it doesnt it will turn it on
