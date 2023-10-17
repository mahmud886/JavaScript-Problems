/*
    JavaScript Program to Insert Item in an Array

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Array splice()
        JavaScript for loop
        JavaScript Arrays
*/

// Solution ====================================================

function insertElement() {
    let array = [1, 2, 3, 4];

    let index = 3;

    let element = 8;

    for (let i = array.length; i > index; i--) {
        array[i] = array[i - 1];
    }
    array[index] = element;

    console.log(array);
}
insertElement();

// Solution ====================================================

/*
    In the above program,

    The for loop is used to iterate through the array elements.
    The element is added to the given index.
    All the elements whose index is greater than the given index are shifted one step to the right.

*/
