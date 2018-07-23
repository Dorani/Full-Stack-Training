var app = require('express');
var app = express();
var request = require('request');


app.get("/results", function(req,res){
  res.send('hello it works');
});





//tell express to listen for request (start server)
app.listen(3000, function(){
  console.log("Movie app on port 3000");
});
