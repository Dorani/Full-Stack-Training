//select player 1 button
//select player 2 button
var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var resetButton = document.querySelector('#reset');

//we now need a way to keep track of score
var p1Score = 0;
var p2Score = 0;

//we need to set game modes
var gameOver = false;// not true at beg of game
var winningScore = 5;//set cap for clicking on p1 or p2, game should end at 5
//select the h1 to start
var h1 = document.querySelector('p1Display');

//set up event lsner, with callback and alert for now
p1Button.addEventListener('click', function(){
  if(!gameOver){//if not game over, then add to score
    p1Score++;
    //now after we add 1 to player1 score, we will check if his score = winning score
    if(p1Score === winningScore){
      p1Display.classList.add("winner");
      gameOver = true;//prevent us from adding more to score
    }
    p1Display.textContent = p1Score;//now take the h1 and change the context to be wtvr the score is
  }
});

//set up event lsner, with callback and alert for now
p2Button.addEventListener('click', function(){
  if(!gameOver){//if not game over, then add to score
    p2Score++;
    //now after we add 1 to player1 score, we will check if his score = winning score
    if(p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;//prevent us from adding more to score
    }
    p2Display.textContent = p2Score;//now take the h1 and change the context to be wtvr the score is
  }
});

resetButton.addEventListener('click', function(){
  //reset player to be 0 in local memory
  p1Score = 0;
  p2Score = 0;
  //the score needs to change on the page
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  //remove the winner class from both players
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');

});
