//select player 1 button
//select player 2 button
var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
//we now need a way to keep track of score
var p1Score = 0;
//select the h1 to start
var h1 = document.querySelector('h1');

//set up event handler, with callback and alert for now
p1Button.addEventListener('click', function(){
  p1Score++;
  h1.textContent = p1Score;//now take the h1 and change the context to be wtvr the score is
});
