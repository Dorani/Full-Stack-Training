# Fibonacci Sequence Using Recursive Function

## File

* *None*

## Instructions

* Take an integer `n` and return the first `nth` numbers of the Fibonacci Sequence.

* For example, if you call the function with the number `10`, you should get back an array with `[1,1,2,3,5,8,13,21,34,55]` (The first 10 numbers of the Fibonacci Sequence).

**Use a recursive function!**

## Info

#### The Fibonacci Sequence

The Fibonacci Sequence is a series of numbers, starting from 1, in which you get the next number by adding the previous two.
[You can read this to learn more about the Fibonacci Sequence.](https://www.mathsisfun.com/numbers/fibonacci-sequence.html)

Note: Calculating the Fibonacci Sequence with a Recursive Function can take a lot of time to process if you use a large number (around 50 or more). This can cause your browser window to be unresponsive while it is calculating.

#### Recursive Functions

Here is an example of a simple recursive function. Watch `simple_recursion.mov` for an explanation and breakdown.

```
var simpleRecursion = function (n){
  if (n>0){
    console.log(n);
    simpleRecursion(n-1);
  } else{
    console.log('done');
  }
};
```
