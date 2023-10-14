/**

    Javascript Program to Check if a number is Positive, Negative, or Zero

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Comparison and Logical Operators
        JavaScript if...else Statement

    You will be using the if...else if...else statement to write the program.

 */

const prompt = require('prompt-sync')();

const number = prompt('Enter a number: ');

// check if the number is greater than zero;
if (number > 0) {
    console.log(`${number} the number is positive`);
}
// check if the number is 0;
else if (number == 0) {
    console.log(`${number} the number is zero.`);
}
// The number less than 0;
else {
    console.log(`${number} the number is negative.`);
}

/**
    Enter a number: 30
    30 the number is positive

    Enter a number: 0
    0 the number is zero.

    Enter a number: -1
    -1 the number is negative.
 */
