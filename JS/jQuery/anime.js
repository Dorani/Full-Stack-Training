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

("#special").css(styles);
