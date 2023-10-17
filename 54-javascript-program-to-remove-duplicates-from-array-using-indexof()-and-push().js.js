/*
    JavaScript Program to Remove Duplicates From Array

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Array indexOf()
        JavaScript Array push()

*/

// program to remove duplicate value from an array

function getUnique(arr) {
    let uniqueArr = [];

    for (let i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const array = [1, 2, 3, 4, 4, 3, 5, 1, 8];

getUnique(array);

/*

    [ 1, 2, 3, 4, 5, 8 ]

    In the above program, the duplicate elements are removed from array.

    Here,

        The for...of loop is used to loop through all the elements of an arr array.
        The indexOf() method returns -1 if the element is not in the array. Hence, during each iteration, if the element equals -1, the element is added to uniqueArr using push().

*/
