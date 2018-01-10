var express = require("express")
//import express, includes all content of ex
var app = express();
//initialize variable called app and execute it


// when we go to "/" we should see "hi there!"
app.get("/", function(req, res){
  res.send("hi there!");
});


// when we go to "/bye" we should see "goodbye!"



// when we go to "/dog" we should see "meow!"


//tell express to listen for request (start server)
