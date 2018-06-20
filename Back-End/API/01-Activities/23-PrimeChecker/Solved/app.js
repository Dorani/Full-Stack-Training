// Prime Checker: SOLUTION
// =======================

// Declare our primeCheck function
function primeCheck(number) {

  // Loop to check to see if a number has divisors other than one and itself.
  // Note: Loops from two to one less than the number we're checking.
  for (var i = 2; i < number; i++) {

    // If the number is evenly divisible
    // by a number between two and one less than itself,
    // then it is not prime.
    if (number % i === 0) {

      // So return false.
      return false;
    }
  }

  // A prime number has to be greater than one,
  // even if it has a divisor other than one and itself.
  return number > 1;
}
