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

//--------------------------------------------------------------------------//

//takes a css style selector
//if you want an id
//can do this with class name as well
//but it will only gives the 1st one,
//querySelector only gives one matching
//the very 1st hit actually
document.querySelector();
var tag = document.querySelector('#highlight');




document.querySelectorAll();
//this will return ALL elements associated with the id or class its querySelector
var tags = document.querySelectorAll('h1');
//returns all h1s
//not the 1st hit like the above selector
//it still works if there is only one match!
