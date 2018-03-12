var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["tony", "seif", "pierre", "emma", "lilly", "sam"];//create an array of friends names


app.get("/", function(req,res){
  res.render("home");
});

app.get("/friends", function(req,res){
  res.render("friends", {friends: friends});//then we need to pass that array of friends into our friends template, where we then loop through and display each friend as a li
});//a property name to look up in the views, and data passing in is also friends

app.post("/addfriend", function(req,res){
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  //console.log(req.body.newfriend);//obj contains all the data from req body, all form data goes into there,
  res.redirect("/friends");//redirect to this route
});



//launch server
app.listen(8000, function(){
  console.log("server is listening!!!!")
});
