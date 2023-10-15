/*
JavaScript Program to Find Sum of Natural Numbers Using Recursion

To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript Function and Function Expressions
    JavaScript Recursion

The positive integers 1, 2, 3, ... are known as natural numbers.

*/
const prompt = require('prompt-sync')();

function sum(num) {
    if (num > 0) {
        return num + sum(num - 1);
    } else {
        return num;
    }
}

const number = parseInt(prompt('Enter a positive number: '));

const result = sum(number);

console.log(`Sum of the number is: ${result}`);

/*
    Enter a positive number: 5
    Sum of the number is: 15
*/
