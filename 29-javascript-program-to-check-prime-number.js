/*

    JavaScript Program to Check Prime Number

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript for loop
        JavaScript if...else Statement
        JavaScript break Statement

    A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.
*/

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a positive number: '));

let isPrime = true;

if (number === 1) {
    console.log(`${number} is neither prime nor composite number.`);
} else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    }
} // check if number is less than 1
else {
    console.log('The number is not a prime number.');
}

/*

    Enter a positive number: 5
    5 is a prime number


    Enter a positive number: -1
    The number is not a prime number.


    Enter a positive number: 0
    he number is not a prime number.

*/
