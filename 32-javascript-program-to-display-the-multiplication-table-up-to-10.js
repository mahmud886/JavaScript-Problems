/*

    JavaScript Program to Display the Multiplication Table

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript for loop

*/

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter an Integer: '));

for (let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
