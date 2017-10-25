//we load up page
//and we will be provided rgb color (222,333,4)
//we then have to guess which color it is
//the color will be provided below

//assign 6 colors that are always the same


//make a list of colors

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

//select all of these, loop through, and assign one of these colors
//to a sqaures background-color
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
//iso a color

//update colorDisplay
colorDisplay.textContent = pickedColor;
//start loop
for (var i = 0 ; i < squares.length; i++){
  //add initial colors to squares
  //each squares
  squares[i].style.backgroundColor = colors[i];//take that i and use it access colors
  //add click lsners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      alert("correct");
    } else {
      alert("wrong");
    }
  });
}
