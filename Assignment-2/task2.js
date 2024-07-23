// Task 2:
// Use reduce to find the sum of all elements in an array.
// Write a JavaScript function that takes an array of numbers as input and returns the sum of all elements.

function sumOfArray(numbers) {
  return numbers.reduce((sum, x) => sum + x);
}

// example
const inputArray = [3, 4, 5];
const sum = sumOfArray(inputArray);

console.log(sum);
