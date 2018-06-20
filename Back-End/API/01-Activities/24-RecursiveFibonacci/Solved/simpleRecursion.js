var simpleRecursion = function(n) {

  // If n is greater than zero
  if (n > 0) {

    // Log n to the console
    console.log(n);

    // Then call simpleRecursion again, and pass in n-1
    // This will run the function again with a number one less than n
    simpleRecursion(n - 1);
  }

  else {
    console.log("Done");
  }
};
