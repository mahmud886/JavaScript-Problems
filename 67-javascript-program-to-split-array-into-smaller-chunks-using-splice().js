/* 
    JavaScript Program to Split Array into Smaller Chunks

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        👉🏻 avaScript Array slice()
        👉🏻 JavaScript Array splice()
        👉🏻 JavaScript Arrays

        In the above program, the while loop is used with the splice() method to split an array into smaller chunks of an array.

        In the splice() method,

           👉🏻 The first argument specifies the index where you want to split an item.
           👉🏻 The second argument (here 2) specifies the number of items to split.

        The while loop is used to iterate over the array until the array is empty.

*/

// =============================== && Solution && ==================================

const splitIntoChunk = (arr, chunk) => {
    while (arr.length > 0) {
        let tempArr;
        tempArr = arr.splice(0, chunk);
        console.log(tempArr);
    }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];
splitIntoChunk(array, (chunk = 2));

// =============================== && Solution && ==================================

/* 
OUTPUT => 
    [ 1, 2 ]
    [ 3, 4 ]
    [ 5, 6 ]
    [ 7, 8 ]
*/
