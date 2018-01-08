//write a function named echo that takes 2 args, sting and number
//it should print out the string, number number of times

//echo("echo!!!,10");//should brint echo!!! 10 times
//run it using node

function echo(str, num){
  for( var i = 1; i <= num; i++){
    console.log(str);
  }

}

echo("echo!!!", 10);
