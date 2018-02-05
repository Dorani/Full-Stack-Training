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

app.get("/fallinlovewith/:thing", function(req,res){
   var thing = req.params.thing;
  //thingVar passed through as an object
  //mulitple pieces of data
  //take the value of thing
  res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Susy"},
     title: "Post 2", author: "Seif"},
     title: "Post 2", author: "Sam"}
  ];
  res.render("posts.ejs", {posts: posts})//pass in our data, the 2nd refers to the name of our var and the other will be in the ejs template
})



//launch server
app.listen(3000, function(){
  console.log("server is listening")
});
