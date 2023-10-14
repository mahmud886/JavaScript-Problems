/*
    Javascript Program to Fahrenheit to Convert Celsius.

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Variables and Constants
        JavaScript Operators

    You can convert the fahrenheit to celsius value by using the formula:

    celsius = (fahrenheit - 32) / 1.8
*/

const prompt = require('prompt-sync')();

const fahrenheit = prompt('Enter a fahrenheit value: ');

// calulate fahrenheit

const celsius = (fahrenheit - 32) / 1.8;

console.log(`${fahrenheit} degree fahrenheit  is equal to ${celsius} degree celsius`);

/*
    Enter a celsius value: 40
    40 degree celsius is equal to 104 degree fahrenheit.
*/
