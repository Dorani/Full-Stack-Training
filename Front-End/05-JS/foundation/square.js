function square(x){
  console.log(x*x);
}
square(4);
//console.log just prints it..
//and we cant use it in any other part of the code

// to make it last we use the return keyword

function square(x){
  return x * x;
}
square(4);
//a return value
// because console.log returns undefined
// every function returns something
// but we need to tell it what to return
