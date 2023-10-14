/**

    JavaScript Program to Convert  Miles to Kilometers

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Variables and Constants
        JavaScript Operators

        We know that 1 mile is equal to 0.621371 kilo.

        So to convert kilometers to miles, you can use the formula:

         kilometers =  miles / factor;

 */

const prompt = require('prompt-sync')();

const miles = prompt('Enter Miles: ');
const weKnowFactor = 0.621371;

const kilometers = miles / weKnowFactor;

console.log(`${miles} miles is equal to ${kilometers} kilometers.`);
