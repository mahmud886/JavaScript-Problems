/**

    JavaScript Program to Convert Kilometers to Miles

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Variables and Constants
        JavaScript Operators

    We know that 1 kilometer is equal to 0.621371 miles.

        So to convert kilometers to miles, you can use the formula:

        miles = kilometers * factor;

 */

const prompt = require('prompt-sync')();

const kilometers = prompt('Enter value in kilometers: ');

const weKnowFactor = 0.621371;

const miles = kilometers * weKnowFactor;

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

/**
     Enter value in kilometers: 20
    20 kilometers is equal to 12.42742 miles.
 */
