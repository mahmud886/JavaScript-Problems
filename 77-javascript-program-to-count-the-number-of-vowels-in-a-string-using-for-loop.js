// const prompt = require('prompt-sync')();

/* 
To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Javascript String match()
Javascript String includes()


*/

// =============================== && Solution && ==================================
const prompt = require('prompt-sync')();

const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowel(str){
    let count = 0;

    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count

}
const str = prompt('Enter a string to count vowels: ')
const result = countVowel(str);
console.log(result);


// =============================== && Solution && ==================================

/* 
Output

Enter a string: JavaScript program
5
In the above example,

All the vowels are stored in a vowels array.
Initially, the value of the count variable is 0.
The for...of loop is used to iterate over all the characters of the string.
The toLowerCase() method converts all the characters of a string to lowercase.
The includes() method checks if the vowel array contains any of the characters of the string.
If any character matches, the value of count is increased by 1.

*/