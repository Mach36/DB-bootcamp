// Task 5: 
// Use map, reduce, and filter to find the longest string in an array of strings.
// Write a JavaScript function that takes an array of strings as input and returns the longest string from the array.

function findLongestString(arr) {
    if (arr.length === 0) return "";

    return arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

// example
const strings = ["apple", "banana", "cherry", "watermelon", "grape"];
const longestString = findLongestString(strings);
console.log(longestString);