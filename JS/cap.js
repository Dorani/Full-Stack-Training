function capitalize(str){
  return str.chatAt(0).toUpperCase() + str.slice(1);
  //return str 1st characted at index 0 to uppercase method, then combining everything after the letter p with capital P
}

var city = "paris"
var capital = capitalize(city);

//we can capture the returned value in a variable


//another way
//function expression

//create a var
var capitalize = function(str){
  return str.chatAt(0).toUpperCase() + str.slice(1);
}

// however:
  // the diff is if i decide to change capitalize to be = to a diff data type
  // my func will be lost

  
