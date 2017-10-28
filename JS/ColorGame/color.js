//we load up page
//and we will be provided rgb color (222,333,4)
//we then have to guess which color it is
//the color will be provided below

//assign 6 colors that are always the same


//make a list of colors

var colors = generateRandomColors(6); //function to generate random colors, takes a single argument, for squares

//select all of these, loop through, and assign one of these colors
//to a sqaures background-color
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change the colors of the squares on the page
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  //we want to make sure the h1 is back to normal after win and button resets game
  h1.style.background = "#232323";
});
//iso a color

//update colorDisplay
colorDisplay.textContent = pickedColor;
//start loop
for (var i = 0 ; i < squares.length; i++){
  //add initial colors to squares
  //each squares
  squares[i].style.background = colors[i];//take that i and use it access colors
  //add click lsners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      //we want to make sure the button content changes when done/reset
      resetButton.textContent = "Play Again";
      //calling the new function change colors and pass in the var we create that is the style/background of color clicked
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = " Try Again!";
    }
  });
}

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.background = color;
  }
}


  function pickColor(){//
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    //generate a number between 0 and 1 and multiple it by the length of the array
    //pick a random number between 0 and the end of the index of the array
    // math.floor chops of deci
    //we need to save it all to a var and use that var to access an element of the array at THAT index

    //use that number to access the color of the array and pick it
  }

  function generateRandomColors(num){
    //make an array
    var arr = []
    //add num  random colors to array
    for(var i = 0; i < num; i++){
      //get random color and push into array
      arr.push(randomColor());
    }
    //return that array
    return arr;
  }

  function randomColor(){
    //pick a red,green,blue from 0 to 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    //synthesizes them into string
    return "rgb(" + r +", " + g +", " + b +")";//spaces after the commmas are so important, when we compare the clickedcolor === pickedcolor they syntax here is crucial

  }
