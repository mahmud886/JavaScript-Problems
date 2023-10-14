/*
    Javascript Program to Check if a Number is Odd or Even

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Comparison and Logical Operators
        JavaScript if...else Statement
        JavaScript Ternary Operator

    Even numbers are those numbers that are exactly divisible by 2.

    The remainder operator % gives the remainder when used with a number. For example,

    const number = 6;
    const result = number % 4; // 2

    Hence, when % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd.

*/

const prompt = require('prompt-sync')();

const number = prompt('Enter a number: ');

const result = number % 2 == 0 ? 'Even' : 'Odd';

console.log(result);

/*
    Enter a number: 5
    Odd
*/
