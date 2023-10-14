/*
    Javascript Program to Convert Celsius to Fahrenheit

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Variables and Constants
        JavaScript Operators

    You can convert the celsius value to fahrenheit by using the formula:

    fahrenheit = celsius * 1.8 + 32
*/

const prompt = require('prompt-sync')();

const celsius = prompt('Enter a celsius value: ');

// calulate fahrenheit

const fahrenheit = celsius * 1.8 + 32;

console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

/*
    Enter a celsius value: 40
    40 degree celsius is equal to 104 degree fahrenheit.
*/
