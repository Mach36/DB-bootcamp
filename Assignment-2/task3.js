// Task 3: 
// Use filter to find all prime numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the prime numbers.

function findPrime(inputArray){
    return inputArray.filter(x => {for (let i=2; i*i<=x; i++){if (x%i==0) return false} return true})
}

// example
const inputArray = [3,4,5,6,7,8,9,11,13];
const primeArray = findPrime(inputArray);

console.log(primeArray);