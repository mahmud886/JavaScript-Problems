/*
    JavaScript Program to Remove Duplicates From Array

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Array set()
        JavaScript Array set()

*/

// program to remove duplicate value from an array

function getUnique(arr) {
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3, 5, 3, 6, 7, 8, 8];

getUnique(array);
