/*
    JavaScript Program to Find LCM

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript if...else Statement
        JavaScript while and do...while Loop
        JavaScript for loop

    The Least Common Multiple (LCM) of two integers is the smallest positive integer that is perfectly divisible by both integers.

    For example, the LCM of 6 and 8 is 24.

*/

const prompt = require('prompt-sync')();

// take input
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

// higher number among number1 and number2 is stored in min

let min = num1 > num2 ? num1 : num2;

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}

/*
    Enter a first positive integer: 6
    Enter a second positive integer: 8
    The LCM of 6 and 8 is 24

    Enter a first positive integer: 10
    Enter a second positive integer: 20
    The LCM of 10 and 20 is 20
 */
