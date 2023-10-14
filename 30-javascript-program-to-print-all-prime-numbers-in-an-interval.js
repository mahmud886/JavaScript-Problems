/*
    JavaScript Program to Print All Prime Numbers in an Interval

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript if...else Statement
        JavaScript for loop
        JavaScript break Statement

    A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.

    For example, 4 is not a prime number because it is divisible by 1, 2 and 4 itself. It is a  composite number.
*/

const prompt = require('prompt-sync')();

const lowerNumber = parseInt(prompt('Enter Lower Number: '));
const higherNumber = parseInt(prompt('Enter Higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
