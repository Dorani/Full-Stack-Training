var express = require("express");
var app = express();
//two steps usually, require 1st, then initialize var app make it
//equal express executed as a function

app.get('/', function(req,res){
  res.send("welcome to the home page");
});









//launch server
app.listen(3000, function(){
  console.log("server is listening")
});
