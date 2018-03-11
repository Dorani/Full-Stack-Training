var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("home");
});

app.get("/friends", function(req,res){
  var friends = ["tony", "seif", "pierre", "emma", "lilly"];//create an array of friends names
  res.render("friends");//
});


//launch server
app.listen(8000, function(){
  console.log("server is listening!!!!")
});
