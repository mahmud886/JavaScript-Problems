/*
    JavaScript Program to Find the Factors of a Number

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript for loop
        JavaScript if...else Statement

    To be the factors of a number, the factor number should exactly divide the number (with 0 remainder). For example,

    The factor of 12 is 1, 2, 3, 4, 6, and 12.

*/

// program to find the factors of an integer
const prompt = require('prompt-sync')();
// take input
const num = prompt('Enter a positive number: ');
console.log(`The factors of ${num} is:`);

// looping through 1 to num

for (let i = 1; i <= num; i++) {
    // check if number is a factor
    if (num % i == 0) {
        console.log(i);
    }
}

/*
    Enter a positive number: 20
    The factors of 20 is:
    1
    2
    4
    5
    10
    20

    In the above program, the user is prompted to enter a positive integer.

    The for loop is used to loop through 1 to the number entered by the user.
    The modulus operator % is used to check if num is exactly divisible.
    In each iteration, a condition is checked if num is exactly divisible by i.

    if(num % i == 0)

    If the above condition is met, the number is displayed.

*/
