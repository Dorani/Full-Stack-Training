//fadeOut()
//animate element, fades it out, allow duration with seconds, then a callback to run

//the divs just fadeout
$("divs").fadeOut():

//now do the same when its clicked
$("button").on("click", function(){
  $("divs").fadeOut();
});
