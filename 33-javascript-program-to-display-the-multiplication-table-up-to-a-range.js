/*
JavaScript Program to Display the Multiplication Table up to the range.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript for loop

*/

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter an integer: '));
const range = parseInt(prompt('Enter the range: '));

for (let i = 1; i <= range; i++) {
    let result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

/*
    Enter an integer: 5
    Enter the range: 6
    5 * 1 = 5
    5 * 2 = 10
    5 * 3 = 15
    5 * 4 = 20
    5 * 5 = 25
    5 * 6 = 30
*/
