// Task 6: 
// Use map to capitalize the first letter of each word in a sentence.
// Write a JavaScript function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

function capitalizeFirstLetters(sentence) {
    return sentence
        .split(' ') // Split the sentence into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a sentence
}

// example

const sentence = "hello world, this is a test sentence.";
const capitalizedSentence = capitalizeFirstLetters(sentence);

console.log(capitalizedSentence);