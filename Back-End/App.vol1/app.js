var express = require ("express");
var app = express();

app.get("/", function(req,res){
  res.send("hi there, welcome to my work")
});

app.get("/speak/:animal", function(req,res){
  var animal = req.params.animal;
  var sound = "";
  if(animal === "pig"){
    sound = "oink";
  }else if(animal === "cow"){
    sound = "moo";
  }
  res.send("the"+ animal + "says" + sound);
});



//tell express to listen for request (start server)
//we need to write the code to tell it to lsn to requests

app.listen(3000, function(){
  console.log("Serving demo app on port 3000");
});
