/*
    JavaScript Program to Find ASCII Value of Character

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript String charCodeAt()
        JavaScript String codePointAt()

    ASCII stands for American Standard Code for Information Interchange.

    ASCII is a numeric value that is given to different characters and symbols for computers to store and manipulate. For example, the ASCII value of the letter 'A' is 65.

    Resource: ASCII chart of all 127 characters in JavaScript.
*/

const prompt = require('prompt-sync')();

const string = prompt('Enter a character: ');
const result = string.charCodeAt(0);

console.log(result);

/*
    Enter a character: D
    68

    Enter a character: a
    97


    In the above program, the charCodeAt() method is used to find the ASCII value of a character.

    The charCodeAt() method takes in an index value and returns an integer representing its UTF-16 (16-bit Unicode Transformation Format) code.

    If you don't pass the index value, the default index value will be 0. If the index value is out of range, it gives NaN.

*/
