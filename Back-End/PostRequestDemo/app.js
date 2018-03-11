var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("home");
});



//launch server
app.listen(8000, function(){
  console.log("server is listening!!!!")
});
