var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("home");
});

app.get("/friends", function(req,res){
  var friends = ["tony", "seif", "pierre", "emma", "lilly", "sam"];//create an array of friends names
  res.render("friends", {friends: friends});//then we need to pass that array of friends into our friends template, where we then loop through and display each friend as a li
});//a property name to look up in the views, and data passing in is also friends


//launch server
app.listen(8000, function(){
  console.log("server is listening!!!!")
});
