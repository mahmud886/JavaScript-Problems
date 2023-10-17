/*
    JavaScript Program to Remove Duplicates From Array

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Array set()
        JavaScript Array set()

        find the second max element of the array

*/

// program to remove duplicate value from an array

function getUnique(arr) {
    let uniqueArr = [...new Set(arr)];
    let sorted = uniqueArr.sort((a, b) => b - a);
    let secondMax = sorted[1];
    console.log(secondMax);
}

const array = [1, 2, 3, 2, 3, 5, 3, 6, 7, 8, 8];

getUnique(array);
