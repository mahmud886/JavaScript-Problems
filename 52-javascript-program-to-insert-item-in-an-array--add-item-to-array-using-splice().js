/*
    JavaScript Program to Insert Item in an Array

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Array splice()
        JavaScript for loop
        JavaScript Arrays
*/

// Solution ====================================================

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;

    array.splice(index, 0, element);
    console.log(array);
}

insertElement();

// Solution ====================================================

/*
    ==> Slice() method return orginal array

    In the above program, the splice() method is used to insert an item with a specific index into an array.

    The splice() method adds and/or removes an item.

    In the splice() method,

    The first argument specifies the index where you want to insert an item.
    The second argument (here 0) specifies the number of items to remove.
    The third argument specifies the element that you want to add to an array.

    */
