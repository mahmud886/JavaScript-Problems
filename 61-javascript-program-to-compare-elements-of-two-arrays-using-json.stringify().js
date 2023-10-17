/* 
    JavaScript Program to Compare Elements of Two Arrays

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript for loop
    JavaScript Arrays
    JavaScript Function and Function Expressions
*/

// program to compare two arrays

function comapareArrays(arr1, arr2) {
    // compare arrays
    const result = JSON.stringify(arr1) == JSON.stringify(arr2);
    // check result is true
    if(result) {
        console.log(`The arrays have the same elements.`);
    }else{
        console.log(`The arrays have different elements.`)
    }
}

const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

comapareArrays(array1, array2)

/*
    Output

    The arrays have the same elements.

    The JSON.stringify() method converts an array into JSON string.

    JSON.stringify([1, 3, 5, 8]); // "[1,3,5,8]"

    Then, the two array strings are compared using ==.


*/