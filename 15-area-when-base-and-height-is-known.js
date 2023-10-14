/**
 *  JavaScript Program to Calculate the Area of a Triangle

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript Operators
    JavaScript Math sqrt()
 */
// If you know the base and height of a triangle, you can find the area using the formula:

// area = (base * height) / 2      ==> formula

const prompt = require('prompt-sync')();

const baseValue = prompt('Enter the base of triangle: ');
const heightValue = prompt('Enter the height of triangle: ');

const areaValue = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is: ${areaValue}`);

/**
    Enter the base of triangle: 5
    Enter the height of triangle: 6
    The area of the triangle is: 15
 */
