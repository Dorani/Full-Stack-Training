app.get("/", function(req, res){
  res.sender("home")
});
//listening for a get request for slach
//and when that happens
//we are rendering a page called home

// we will have a homepage.ejs file that will represent that route


app.get("/dogs", function(req, res){
  dog.find({}, function(err, dogs){
    res.render("dogs",{dogs: dogs});
  });
})
