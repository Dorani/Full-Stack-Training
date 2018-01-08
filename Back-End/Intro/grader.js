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
