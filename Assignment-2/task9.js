// Task 9:
// Create a Promise-Based Calculator
// Write a Promise-based calculator that takes two numbers and an operation (addition, subtraction, multiplication, or division) as input. Perform the corresponding operation and resolve the Promise with the result. Handle division by zero and any invalid operations by rejecting the Promise with an appropriate error message.

function calculator(x, y, operation){
    return new Promise((resolve, reject) => {
        switch(operation){
            case 'addition':
                resolve(x+y);
                break;
            case 'subtraction':
                resolve(x-y);
                break;
            case 'multiplication':
                resolve(x*y);
                break;
            case 'division':
                if(y==0) reject(new Error('Division by zero is not allowed'));
                else resolve(x/y);
                break;
            default:
                reject(new Error('Invalid operation'));
            
        }
    });
}

// example
calculator(10, 5, 'addition')
    .then(result => console.log('Addition Result:', result))
    .catch(error => console.error('Error:', error.message));

calculator(10, 5, 'subtraction')
    .then(result => console.log('Subtraction Result:', result))
    .catch(error => console.error('Error:', error.message));

calculator(10, 5, 'multiplication')
    .then(result => console.log('Multiplication Result:', result))
    .catch(error => console.error('Error:', error.message));

calculator(10, 5, 'division')
    .then(result => console.log('Division Result:', result))
    .catch(error => console.error('Error:', error.message));

calculator(10, 0, 'division')
    .then(result => console.log('Division Result:', result))
    .catch(error => console.error('Error:', error.message));

calculator(10, 5, 'modulus')
    .then(result => console.log('Modulus Result:', result))
    .catch(error => console.error('Error:', error.message));
