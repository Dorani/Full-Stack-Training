//Diff ways of selecting elements:
//Using selector.html

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
//tags will return 2 obj with tons of properties
//list of 2 lis
//node list which is array like
//we can access elements etc.. but no forEach loop


document.getElementsByTagName();
//returns a list of elements that match a tag name, like li, or h1, body etc
//in this case
//we should get a list of the 3 lis that live ul
//objects
var tags = document.getElementsByTagName('li');


document.querySelector();

document.querySelectorAll();
