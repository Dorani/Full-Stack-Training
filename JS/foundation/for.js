//array interation:
  //comments or posts ('list of data') we want to do something with.
  //those comments are stored in an array
  //in order to display comments
  //a loop is used to go itterate through array to print out each comments

//for loop
//loop through array
//print out each orange
var color = ['red','green','orange'];//create an array and assign it to color
for(var i = 0; i < color.length; i++){//i starts at 0, then we add 1 to i, and we keep going while i < the length of the color array
  console.log(color[i]);//log each index of the array
}

//forEach
  //new loop in js
  //came out in 2009
  //best way to loop through array
  //we pass a function into another function


//method thats defined on every single array
//part of the array prototype, where all those cool methods live
  //takes a function as an argument
  //pass in a function
  //then call it


var colors = ['red','green','orange'];//create an array and assign it to color
colors.forEach(function(color){
  console.log(color);
});
