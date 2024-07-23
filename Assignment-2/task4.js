// Task 4: 
// Use map, reduce, and filter to calculate the average of squared odd numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and calculates the average of the squares of all odd numbers in the array.

function squaredOddAverageArray(inputArray){
    const oddArray = inputArray.filter(x => x%2!=0);
    const squaredArray = oddArray.map(x => x*x);
    return squaredArray.reduce((sum,x)=> sum+x)/oddArray.length;
}

// example
const inputArray = [3,4,5];
const outputArray = squaredOddAverageArray(inputArray);

console.log(outputArray);