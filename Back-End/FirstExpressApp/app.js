var express = require("express")
//import express, includes all content of ex
var app = express();
//initialize variable called app and execute it


// when we go to "/" we should see "hi there!"
app.get("/", function(req, res){
  res.send("hi there!");
});
  //app.get takes 2 diff parameters, the url or path which is the route
  //the other is a callback function which takes 2 arguments, request and responses
  //req and res are objects, req contains all the information about the req that was made that triggered the routes
  //same for response
  // then respond with text



//-----------------------------------------------
// when we go to "/bye" we should see "goodbye!"
app.get("/bye", function(req, res){
  res.send("goodbye!");
});


// when we go to "/dog" we should see "meow!"
app.get("/dog", function(req, res){
  console.log("someone made a request to /DOG")
  res.send("meow!");
});


//route paterns example
//to see this msg we need to go to a route that matches the pattern
app.get("/r/:subredditName", function(req,res){
  //to see all the info from the requests
  //we want req.paramas
      //obj that contains all the route parameters and corresponding values
  console.log(req.params);
  var subreddit = req.params.subredditName;
  res.send("welcome to the" + subreddit.toUpperCase() + " subreddit");
});

//using reddit examples
app.get("/r/:subredditName/comments/:id/:title/", function(){
  console.log(req.params);
  res.send("welcome to the comments page");
});



//if i go to a route that is not defined
//i get routed here ( kinda like a page not found )
//do not put this first, because it will override the rest
app.get("*", function(req, res){
  res.send("you are a star!!");
});




//tell express to listen for request (start server)
//we need to write the code to tell it to lsn to requests

app.listen(3000, function(){
  console.log("Serving demo app on port 3000");
});
//end
