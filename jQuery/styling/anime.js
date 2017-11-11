//so many different ways of selecting in js
//jQuery makes this easier

//to select all img tags
$('img')

//to select all elemtns with class 'sale'
$(".sale")

//to select element with id 'bonus'

$("#bonus")

//to select all a tags inside of li's
$("li a")




//---------------------------------------------------

//select element with id "special and git it a border

$("#special").css("border", "2px solid red");

//we can also pass in an ob with style

var styles = {
  backgroundColor : "pink",
  fontWeight: "bold"
}

("#special").css(styles);//already proven to be powerful, time saver and makes code cleaner!

// to do this in js:
document.querySelector("h1").style.color="orange";

//make all lis blue
$("li").css("color", "blue");

//to do the above code in js

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
  lis[i].style.color="blue"
};

//another way:
//query selector and querySelectorAll in one way

$("li").css({
  fontSize: "10px",
  border:"3px dashed purple",
  background: "rgba(89,45,20, 0.5)"
});
