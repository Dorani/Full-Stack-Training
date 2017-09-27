function capitalize(str){
  return str.chatAt(0).toUpperCase() + str.slice(1);
}

var city = "paris"
var capital = capitalize(city);

//we can capture the returned value in a variable
