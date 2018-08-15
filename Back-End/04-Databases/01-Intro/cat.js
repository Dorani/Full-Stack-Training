var mongoose = require('mongoose');
//we need to connect to a database
//run mongod = our daemon server
//we need to tell mongoose to connect to this server we have running
// mongoose.connect('mongodb://localhost:27017/cat.js', { useNewUrlParser: true });//url + default port number + name of DB
//if I do not have a cat app db, it will run it, see that and make One

var options = {
 useNewUrlParser: true
 };

mongoose.connect('mongodb://127.0.0.1:27017/cat_app', options).then(function(){
  console.log("we live baby!");
});

//tells mongoose - the js side of things that i want to add
//cats to a database

//so we dont define a table just define a "pattern" for our table
//this pattern has a set of attributes
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperment: String
});
//we took the pattern cat schema, and compiled it into a modele
//save it into a var Cat
var Cat = mongose.model("Cat", catSchema);//name of our singular version of our model which is cat and it will make a collection like db_cats
//now we can do everything off the Cat object
//which is really just a pattern that has methods:
    //Cat.find - Cat.














//adding a new cat to DB

//retrieve all cats from DB and console.log each One
