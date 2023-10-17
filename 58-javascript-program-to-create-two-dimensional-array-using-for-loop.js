// [[0, 1, 2], [0, 1, 2]]

function twoDimensionArray(a, b) {
    let arr = [];

    // Creating two dimentional array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i] = [];
        }
    }
    // inserting element to array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}

const x = 6;
const y = 5;
const result = twoDimensionArray(x, y);
console.log(result);
