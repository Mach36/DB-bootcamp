// Task 10:
// Calculate Total Score
// Write a JavaScript function that takes an array of objects, where each object contains a property score, and uses the forEach method to calculate the total score of all the objects in the array. Return the total score as the output.

function totalScore(objects) {
  let totalScore = 0;
  objects.forEach((obj) => {
    totalScore += obj.score;
  });
  return totalScore;
}

// example
const scores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 90 },
];

const total = totalScore(scores);
console.log(total); // Output: 345
