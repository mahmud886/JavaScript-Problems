/*
    JavaScript Program to Remove Specific Item From an Array

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Array push()
        JavaScript Array splice()
        JavaScript for loop

*/

// Solution ===============================================================

function removeItemFromArray(array, n) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] != n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result = removeItemFromArray([1, 2, 3, 4, 5], 2);
console.log(result);

// Solution ===============================================================

/*
    [1, 3, 4, 5]

    In the above program, an item is removed from an array using a for loop.

    Here,

        The for loop is used to loop through all the elements of an array.
        While iterating through the elements of the array, if the item to remove does not match with the array element, that element is pushed to newArray.
        The push() method adds the element to newArray.


*/
