/**

    Javascript Program to Check if a number is Positive, Negative, or Zero

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Comparison and Logical Operators
        JavaScript nested if...else Statement

    You will be using the nested if...else statement to write the program.

 */
const prompt = require('prompt-sync')();

const number = prompt('Enter a number: ');

if (number >= 0) {
    if (number == 0) {
        console.log(`The number is zero.`);
    } else {
        console.log(`The number is positive`);
    }
} else {
    console.log(`The number is negative.`);
}

/*
    Enter a number: 0
    The number is zero.

    Enter a number: 1
    The number is positive

    Enter a number: -1
    The number is negative.
*/
