// FizzBuzz Solution

// =================

function fizzBuzz() {

  // Loop 100 times, starting from the number 1
  for (var i = 1; i <= 100; i++) {

    // If divisible by 3 and 5,
    if (i % 3 === 0 && i % 5 === 0) {

      // print FizzBuzz.
      console.log("FizzBuzz");

    }

    // If divisible by 3,
    else if (i % 3 === 0) {

      // print Fizz.
      console.log("Fizz");

    }

    // If divisible by 5,
    else if (i % 5 === 0) {

      // print Buzz.
      console.log("Buzz");

    }

    // If not divisible either 3 or 5,
    else {

      // just print the number.
      console.log(i);
    }
  }
}
