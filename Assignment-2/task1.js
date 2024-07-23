// Task 1:
// Use map to convert an array of numbers into an array of their cubes.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing the cubes of each number.

function cubedArray(numbers) {
  return numbers.map((x) => Math.pow(x, 3));
}

// example
const inputArray = [3, 4, 5];
const outputArray = cubedArray(inputArray);

console.log(outputArray);
