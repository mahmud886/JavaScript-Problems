const prompt = require('prompt-sync')();

// program to convert decimal to binary

// take input
const number = parseInt(prompt('Enter a decimal number: '));

// convert to binary
const result = number.toString(2);

console.log('Binary:' + ' ' + result);

/*
    Enter a decimal number: 9
    Binary: 1001

    In the above program, the user is prompted to enter a number. The parseInt() method is used to convert a string value to an integer.

    The JavaScript built-in method toString([radix]) returns a string value in a specified radix (base). Here, toString(2) converts the decimal number to binary number.

*/
