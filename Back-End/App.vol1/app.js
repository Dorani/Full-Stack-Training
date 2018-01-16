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

  var animal = req.params.animal.toLowerCase();
  //sounds will be equal to sounds of animal
  var sound = sounds[animal];

  res.send("The "+ animal + " says '" + sound + "'");
});

//repeat route

app.get("/repeat/:message/:times", function(req,res){
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";

  for(var i = 0; i < times; i++){
    result += message + " ";
  }
  res.send(result);
})
//send back result string by going through the loop
//hi/10 should get 10 his



//tell express to listen for request (start server)
//we need to write the code to tell it to lsn to requests
app.listen(3000, function(){
  console.log("Serving demo app on port 3000");
});
