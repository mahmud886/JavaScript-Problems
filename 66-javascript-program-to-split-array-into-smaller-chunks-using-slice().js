/* 
    JavaScript Program to Split Array into Smaller Chunks

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        👉🏻 avaScript Array slice()
        👉🏻 JavaScript Array splice()
        👉🏻 JavaScript Arrays

        In the above program, the for loop is used with the slice() method to split an array into smaller chunks of array.

        The for loop iterates through the elements of an array. During each iteration, the value of i is increased by chunk value (here 2).

        The slice() method extracts elements from an array where:

           👉🏻 The first argument specifies the starting index.
           👉🏻 The second argument specifies the ending index.


*/

// =============================== && Solution && ==================================
const splitIntoChunk = (arr, chunk) => {
    for (let i = 0; i < arr.length; i = i + chunk) {
        let tempArr;
        tempArr = arr.slice(i, i + chunk);
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
