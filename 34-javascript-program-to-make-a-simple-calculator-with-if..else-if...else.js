/*
    JavaScript Program to Make a Simple Calculator

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript if...else Statement
        JavaScript switch Statement

*/

const prompt = require('prompt-sync')();

const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
} else if (operator == '-') {
    result = number1 - number2;
} else if (operator == '*') {
    result = number1 * number2;
} else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);

/*
    Enter operator ( either +, -, * or / ): +
    Enter first number: 6
    Enter second number: 4
    6 + 4 = 10

    Enter operator ( either +, -, * or / ): -
    Enter first number: 4
    Enter second number: 2
    4 - 2 = 2

    Enter operator ( either +, -, * or / ): *
    Enter first number: 5
    Enter second number: 7
    5 * 7 = 35

    Enter operator ( either +, -, * or / ): /
    Enter first number: 6
    Enter second number: 7
    6 / 7 = 0.8571428571428571

*/
