var express = require ("express");
var app = express();

app.get("/", function(req,res){
  res.send("hi there, welcome to my work")
});


//obj sounds that matches an animal
//we take the animal and plug it into sounds
//and we get the result which is the sound
app.get("/speak/:animal", function(req,res){
  var sounds = {
    pig: "oink",
    dog: "woof",
    cow: "moo",
    cat: "moew",
    fish: "......"
  }

  var animal = req.params.animal;
  //sounds will be equal to sounds of animal
  var sound = sounds[animal];

  res.send("the"+ animal + "says" + sound);
});



//tell express to listen for request (start server)
//we need to write the code to tell it to lsn to requests

app.listen(3000, function(){
  console.log("Serving demo app on port 3000");
});
