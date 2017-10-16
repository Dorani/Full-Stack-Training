//putting it all together:

//select the logo
//isolate the id
//assign it to a var
//and begin manipulating!
var logo = document.querySelector("#hplogo");


//change source
logo.setAttribute('src', 'http://www.facebook.com');

//changing style
logo.style.width = '500px';
logo.style.height = '1000px';
logo.style.border = '2px solid purple';





//selecting a bunch of elements in a tag
var links = document.getElementsByTagName('a');
//loop through them
for(var i = 0; i<links.length; i++){
  console.log(links[i].textContent);
}
//display content
//gmail, images, sign in, etc.. all the links!


for(var i = 0; i<links.length; i++){
  links[i].style.background = 'pink';
}
//let's change the style with that loop
//now all the links on the page are pink


for(var i = 0; i<links.length; i++){
  links[i].style.border = '1px dashed purple';
  links[i].style.color = 'orange';
}
//more style changes on all links
