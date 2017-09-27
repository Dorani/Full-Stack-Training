function capitalize(str){
  return str.chatAt(0).toUpperCase() + str.slice(1);
  //return str 1st characted at index 0 to uppercase method, then combining everything after the letter p with capital P
}

var city = "paris"
var capital = capitalize(city);

//we can capture the returned value in a variable
