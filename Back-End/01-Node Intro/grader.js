function average(scores){
  //add all scores together
  var total = 0;
  scores.forEach(function(score){
    total += score;
  })
  //devide by total of scores
  var avg = total / scores.length

  //round average
  return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

//pass in array
//called scores
//start a total var at 0
//loop through scores, using forEach
//add each score into total
//devide total by all the scores, and set it to average
//then math.round avg and return that
