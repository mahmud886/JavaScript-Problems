/*
    JavaScript Program to Remove Specific Item From an Array

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Array push()
        JavaScript Array splice()
        JavaScript for loop

*/

// Solution ===============================================================

function removeItemFromArray(array, n) {
    const index = array.indexOf(n);
    // if element is in the array, remove it
    if (index > -1) {
        // remove item
        array.splice(index, 1);
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3, 4, 5], 4);
console.log(result);

// Solution ===============================================================

/*

    In the above program, an array and the element to be removed is passed to the custom removeItemFromArray() function.

    Here,

    const index = array.indexOf(2);
    console.log(index); // 1

        The indexOf() method returns the index of the given element.
        If the element is not in the array, indexOf() returns -1.
        The if condition checks if the element to remove is in the array.
        The splice() method is used to remove the element from an array.

    Note: The above program only works for arrays without duplicate elements.

    Only the first element of an array that matches is removed.

    For example,

    [1, 2, 3, 2, 5] results in [1, 3, 2, 5]



*/
