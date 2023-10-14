/*
    JavaScript Program to Find the Largest Among Three Numbers

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Comparison and Logical Operators
        JavaScript if...else Statement

    You can find the largest among three numbers using the if...else statement.
*/

const prompt = require('prompt-sync')();

const number1 = parseFloat(prompt('Enter number 1: '));
const number2 = parseFloat(prompt('Enter number 2: '));
const number3 = parseFloat(prompt('Enter number 3: '));

let largestNumber;

if (number1 >= number2 && number1 >= number3) {
    largestNumber = number1;
} else if (number2 >= number1 && number2 >= number3) {
    largestNumber = number2;
} else {
    largestNumber = number3;
}
console.log(`The largest number is : ${largestNumber}`);

/*
    Enter number 1: 5
    Enter number 2: 6
    Enter number 3: 2
    The largest number is : 6

    Enter number 1: -7
    Enter number 2: -5
    Enter number 3: -1
    The largest number is : -1
*/
