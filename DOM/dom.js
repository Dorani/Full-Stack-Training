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


//
