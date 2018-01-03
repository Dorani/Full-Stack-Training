function doMath(){
  var x = 40;
  console.log(x);
}
doMath();
//40 is outputed
//however, if we just try to call x
  // we will get undefined
  // x is not defined
  // x was declared locally within the function scope doMath
  // and not globally outside the function



var y = 99;

  function doMoreMath(){
    console.log(y);
  }
  doMoreMath();//99
  //when we define somehting outside the function we still have access to it inside of the function
  //but the opp is NOT true


//now what if we define a var locally within the function scope that is the exact same declaration in the
//global scope but the value is diff

var y = 99;

  function doMoreMath(){
    y = 100;
    console.log(y);
  }
  doMoreMath();//100

  //1st it will see if there are any var declared locally and if there are it doesnt need to access anything else
