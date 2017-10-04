//click()
//keypress()
//on() used 99% of the times





//-----------------------------------

//print when item with id 'submit is clicked

$("#submit").click(function(){
  console.log("another click");
});

//alerts when ANY buttin is clicked
$("button").click(function(){
  alert("somone clicked button");
});

//in vanJS to add an event lister to a collection of buttons
  // SELECT them all with querySelector
  // for loop to loop thorugh all of them
  // then add an event lsner
