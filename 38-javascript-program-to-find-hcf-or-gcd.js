/*
    JavaScript Program to Find HCF or GCD

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript for loop
        JavaScript if...else Statement
        JavaScript while and do...while Loop

    The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two integers is the largest integer that can exactly divide both integers (without a remainder).

    For example, the HCF of 60 and 72 is 12.

*/

// program to find the HCF or GCD of two integers
const prompt = require('prompt-sync')();

// take input
let number1 = prompt('Enter a first positive integer: ');
let number2 = prompt('Enter a second positive integer: ');

// looping until both numbers are equal
while (number1 != number2) {
    if (number1 > number2) {
        number1 -= number2;
    } else {
        number2 -= number1;
    }
}

// display the hcf
console.log(`HCF is ${number1}`);
