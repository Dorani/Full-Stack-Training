//fadeOut()
//animate element, fades it out, allow duration with seconds, then a callback to run

//the divs just fadeout
$("divs").fadeOut():

//now do the same when its clicked
$("button").on("click", function(){
  $("divs").fadeOut(1000);//adding time with the argument passed in milli seconds
});

//print a message on the divs faded
$("button").on("click", function(){
  $("divs").fadeOut(1000);//adding time with the argument passed in milli seconds
  console.log("face completed");
});

//this takes a full second so we should add a callback auto when done
$("button").on("click", function(){
  $("divs").fadeOut(1000, function(){
    console.log("face completed");
  });
});
//fade out finished then 3 console.logs



//now lets have them delete completely when faded out
$("button").on("click", function(){
  $("divs").fadeOut(1000, function(){
    $(this).remove();// now our body should only have a button and no longer displaying the divs, set to none
  });
});

//same can happen with fadeIn
$("button").on("click", function(){
  $("divs").fadeIn(1000, function(){
    console.log("divs are back");
  });
});


// FadeToggle()
// works the same way
$("button").on("click", function(){
  $('div').fadeToggle(500);
})
