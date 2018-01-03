//DOM:
  // Document object model
    // interface between js and html and compress
    // cool ways to interact


// The browser turns every html tag into a js object
  // load html in browser
  // the dom is created from above
  // it essentially turns every element into js objects
  // behind the scenes it makes a model of every js object

//Document: The root node where everything lives

//in the console:
// console.dir(document)
  // this another method that will return the entire document object
  // a regular object
    // with a lot of info like fonts, imgs,links, body with props
    // great way to investigate!s

//We will write js code that will select elements that will return it back
//and change properties/manipulate

//so let's select the h1 in the dom.html
var h1 = document.querySelector('h1');
//returns a obj that represents this h1
//saves it in h1 var
//selectin process
h1.style.color = 'pink';
//manipulating
//change color, h1 var that has the obj represting the h1,
//.style 1 property, that is a huge obj with a bunch of other properties
//color is one of them, browser sees that and updates

//select + manipulating above


// Animation:
//every sec we change background color of body between blue and white
  // select body
  // manipulate

var body = document.querySelector('body');
//gives me the obj rep of the body element and assigns it a var
var isBlue = false;
//bool to use to know if im going frorm blue to white and white to blue

setInterval(function(){
  if (isBlue){
    body.style.background = "white";
  } else {
    body.style.background = "blue";
  }
  isBlue = !isBlue;//change our isBlue var from false to true
},1000);
//set interval takes 2 arguments
  // 1st is some code: function
  // 2nd is time, number in miliseconds (1000) ie 1 second
  // every 1 second it will call this code
  // checks if background is currently blue
  // if it is, it changes it to white
  // and it repeats for white as well
