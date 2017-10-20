//select player 1 button
//select player 2 button
var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
//we now need a way to keep track of score

var p1Score = 0;

//set up event handler, with callback and alert for now
p1Button.addEventListener('click', function(){
  p1score++;
  console.log(p1score);
});
