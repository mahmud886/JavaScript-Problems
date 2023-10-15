/*
    JavaScript Program to Make a Simple Calculator

    To understand this example, you should have the knowledge of the following JavaScript programming topics:
/
        JavaScript if...else Statement
        JavaScript switch Statement
*/

// Simple Calculator

const prompt = require('prompt-sync')();

let result;

const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch (operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + {number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    default:
        console.log('Invalid operator!');
        break;
}

/*
    Enter operator ( either +, -, * or / ): -
    Enter first number: 2
    Enter second number: 1
    2 - 1 = 1


*/
