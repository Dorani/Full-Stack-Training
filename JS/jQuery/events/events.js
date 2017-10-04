//click()
//keypress()
//on() used 99% of the times

//-----------------------------------
//CLICK() METHOD:

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

//when all button are clicked change the background when clicked
  $("button").click(function(){
    $(this).css("background", "pink") //this will refer to the element that was clicked on
  });

  //do not forget to use the jquery version of this

  //another ie:
  $("button").click(function(){
    var text = $(this).text();
    console.log("you clicked" + text);
  });

  // refering to elements that are clicked



//--------------------------------------------

//KEYPRESS() METHOD:

//keyup(), keydown(), keypress(), check the docs for more!

//works kinda like the click method in that,
//select something, chain on .keypress and pass in a callback function

//anytime a key is pressed in an input field consolelog something
$("input").keypress(function(){
  console.log("key pressed");
});
// type a key and you should see a console log for every charater

//run a code based off a key pressed?
$("input").keypress(function(event){//event obj will contain information
  console.log("event");
});
//which: refers to the code of the key pressed
// the letter c code = 67
// we do this a lot, we use key codes to do something, like a conditionals

$("input").keypress(function(event){//event obj will contain information
  if(event.which === 13){ //event obj added to callback, it was being passed in regardless, but now we are passing it in
    alert ("you hit enter!");
  }
});

//-----------------------------------------------------------

//ON() METHOD
//very similar to the add event lsner
//where we give it the name of the event we want, specificity
//its not JUST FOR click events, on() supports all types of events

$("button").on('dblckick', function(){
  alert("double clicked");
});

$("a").on("dragstart", function(){
  console.log("drag started");
});

//when i click on it, change all H1 to change to purple
$("h1").on("click", function(){
  $("h1").css("color", "purple")
});

// if you want something more specific use this
$("h1").on("click", function(){
  $(this).css("color", "purple")// what this does, is ensure the only element clicked on in all h1's is manipulated
});

$("input").on("keypress", function(){
  console.log("kepressed")
});
//everytime i type a key


//how about when we hover over a button?, make bold
$("button").on("mousseenter", function(){
  $(this).css("font-weight", "bold");
});

//back to normal after however
$("button").on("mouseleave", function(){
  $(this).css("font-weight", "normal");
});


//--------------------------------
