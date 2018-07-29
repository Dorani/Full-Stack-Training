var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");




app.get("/", function(req,res){
  res.render("search");
});


//(TAKING OUR REQUEST CODE AND PUTING IT IN OUR APP:)
//created routes called results
//made an api request to omdbapi
//parse data coming back
//used parsedData container to isolate 1st element of array
//send to results route
app.get("/results", function(req,res){

  var query = req.query.search;
  var url = "http://www.omdbapi.com/?s="+ query +"&apikey=thewdb";

  request(url, function(error, response,body){
    if (!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("results", {data: data});
    }
  });
});





//tell express to listen for request (start server)
app.listen(3000, function(){
  console.log("Movie app on port 3000");
});
