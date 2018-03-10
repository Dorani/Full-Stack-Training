var express = require("express");
var app = express();
//two steps usually, require 1st, then initialize var app make it
//equal express executed as a function

app.use(express.static("public"));//tells express to serve the contents of the public directory
app.set("view engine", "ejs");

app.get('/', function(req,res){
  //render a file
  //method called render, lives on the response obj
  //then give it a name of a file
  res.render("home");
});

app.get("/fallinlovewith/:thing", function(req,res){
   var thing = req.params.thing;
  //thingVar passed through as an object
  //mulitple pieces of data
  //take the value of thing
  res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
  var posts = [
    {title: "The Journal", author: "Susy"},
    {title: "The Times", author: "Seif"},
    {title: "The New Republic", author: "Sam"}
  ];
  res.render("posts", {posts: posts});//pass in our data, the 2nd refers to the name of our var and the other will be in the ejs template
});



//launch server
app.listen(3000, function(){
  console.log("server is listening")
});
