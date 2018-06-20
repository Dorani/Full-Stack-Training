# Simple Timer

## File

* [`interval-unsolved`](../Unsolved/interval-unsolved.html)

## Our Bug

* Explain that in our code we execute the `run` function each time that we click our `resume` button. Because we are declaring a new `intervalId` with each instance of `run` we are increasing the speed at which our timer drops, by calling multiple `setIntervals`. To fix this, we added our `clearInterval(intervalId)` BEFORE setting the new `intervalId` making sure we would not have multiple instances.
