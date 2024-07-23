// Task 1:
// Use map to convert an array of numbers into an array of their cubes.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing the cubes of each number.

function cubedArrays(numbers) {
  return numbers.map((number) => Math.pow(number, 3));
}

// example
const inputArray = [3, 4, 5];
const outputArray = cubedArrays(inputArray);

console.log(outputArray);
