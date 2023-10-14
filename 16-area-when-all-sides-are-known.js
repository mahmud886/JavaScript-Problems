/**

If you know all the sides of a triangle, you can find the area using Herons' formula. If a, b and c are the three sides of a triangle, then

        s = (a+b+c)/2
        area = √(s(s-a)*(s-b)*(s-c))

         Area When All Sides are Known
 *
 */

// CODE
const prompt = require('prompt-sync')();

const side1 = parseInt(prompt('Enter side 1: '));
const side2 = parseInt(prompt('Enter side 2: '));
const side3 = parseInt(prompt('Enter side 1: '));

// calculate semi-periemeter

const semiPerimeter = (side1 + side2 + side3) / 2;

console.log(`Semi-Perimeter is : ${semiPerimeter}`);

// Calculate Area
const area = semiPerimeter * (semiPerimeter - side1) * (semiPerimeter * side2) * (semiPerimeter * side3);

const areaValue = Math.sqrt(area);

console.log(`The area of tringle is : ${areaValue}`);

/**
        Enter side 1: 4
        Enter side 2: 5
        Enter side 1: 6
        Semi-Perimeter is : 7.5
        The area of tringle is : 210.4682280060342
 */
