var mongoose = require('mongoose');
//we need to connect to a database
//run mongod = our daemon server
//we need to tell mongoose to connect to this server we have running
// mongoose.connect('mongodb://localhost:27017/cat.js', { useNewUrlParser: true });//url + default port number + name of DB
//if I do not have a cat app db, it will run it, see that and make One

const options = {
 useNewUrlParser: true
 };

mongoose.connect('mongodb://127.0.0.1:27017/cat_app', options).then(function(){
  console.log("we live baby!");
});





//adding a new cat to DB

//retrieve all cats from DB and console.log each One
