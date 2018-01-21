var express = require("express");
var app = express();
//two steps usually, require 1st, then initialize var app make it
//equal express executed as a function

app.get('/', function(req,res){
  //render a file
  //method called render, lives on the response obj
  //then give it a name of a file
  res.render("home.ejs");
});









//launch server
app.listen(3000, function(){
  console.log("server is listening")
});
