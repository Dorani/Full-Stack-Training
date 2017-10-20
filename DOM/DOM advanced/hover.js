var firstLI = document.querySelector('li');




firstLI.addEventListener('mouseover', function(){
  firstLI.style.color = "green";
});

//when we hover over the 1st list item
//we will fire a lsner called mouseover and execute a function
//that will change the style of that specific element


firstLI.addEventListener('mouseout', function(){
  firstLI.style.color = "black";
});
//hover off it and it turns black
