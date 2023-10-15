/*
    JavaScript Program to Find the Sum of Natural Numbers

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript for loop
        JavaScript while and do...while Loop


*/

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a positive number: '));

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log('The sum of natural numbers:', sum);

/**
    Enter a positive number: 33
    The sum of natural numbers: 561


    In the above program, the user is prompted to enter a number.

    The parseInt() converts the numeric string value to an integer value.

    The for loop is used to find the sum of natural numbers up to the number provided by the user.

    The value of sum is 0 initially.
    Then, a for loop is used to iterate from i = 1 to 100.
    In each iteration, i is added to sum and the value of i is increased by 1.
    When i becomes 101, the test condition is false and sum will be equal to 0 + 1 + 2 + ... + 100.

 */
