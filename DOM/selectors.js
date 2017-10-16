//Diff ways of selecting elements:

document.getElementById();
//takes in id name, returns element with that id
//example with selector.html
  var tag = document.getElementById('highlight');
//call the method, pass in a single string argument, then it finds a matching element with that id and returns it




document.getElementsByClassName();
//its plural, also by class name, still isolating though
//class can occur as many times which is why its plural
//in action
var tags = document.getElementsByClassName('bolded');
//tags will return 2 obj with bolded props



document.getElementByTagName();

document.querySelector();

document.querySelectorAll();
