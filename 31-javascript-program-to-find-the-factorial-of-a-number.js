/* JavaScript Program to Find the Factorial of a Number

To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript if...else Statement
    JavaScript for loop

The factorial of a number is the product of all the numbers from 1 to that number. For example,

factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.

The factorial of a positive number n is given by:

factorial of n (n!) = 1 * 2 * 3 * 4.....n

The factorial of negative numbers do not exist and the factorial of 0 is 1. */

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a positive number: '));

if (number < 0) {
    console.log(`Error! Factorial for negative number does not exits.`);
} else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
} else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

/*
    Enter a positive number: 5
    The factorial of 5 is 120.

    Enter a positive number: 1
    The factorial of 1 is 1.

    Enter a positive number: 0
    The factorial of 0 is 1.
*/
