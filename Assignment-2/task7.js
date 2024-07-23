// Task 7: 
// Use filter to find all students who passed the exam.
// Write a JavaScript function that takes an array of student objects (with properties name and score) as input and returns an array containing only the students who passed the exam (scored 60 or above).

function passedStudents(students){
    return students.filter(student => student.score>=60);
}

// example
const students = [
    { name: "Alice", score: 58 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 62 },
    { name: "David", score: 48 },
    { name: "Eve", score: 90 }
];

const passingStudents = passedStudents(students);
console.log(passingStudents);
