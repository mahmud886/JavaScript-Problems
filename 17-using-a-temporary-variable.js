/**
 JavaScript Program to Swap Two Variables

 To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript Variables and Constants
    JavaScript Operators
 */
// JavaScript program to swap two variables

const prompt = require('prompt-sync')();

// take input from the user;

let variable1 = prompt('Enter variable 1: ');
let variable2 = prompt('Enter variable 2: ');

console.log(`The value of before swapping: ${variable1} & ${variable2}`);

// create temporary variable

let temp;

temp = variable1;
variable1 = variable2;
variable2 = temp;

console.log(`The value of after swapping: ${variable1} & ${variable2}`);

/*
    Enter variable 1: 5
    Enter variable 2: 6
    The value of before swapping: 5 & 6
    The value of after swapping: 6 & 5

*/
