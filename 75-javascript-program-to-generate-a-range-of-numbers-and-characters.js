

// const prompt = require('prompt-sync')();

/* 

To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript String fromCharCode()
    JavaScript String charCodeAt()
    JavaScript Array map()
    JavaScript Generators

*/

// =============================== && Solution && ==================================
// Generate Range of Characters

// 1st Way

function* iterate(start, end) {
 for(let i = start; i <= end; i++){
    yield i;
 }
}

function range(start, end) {
    if(typeof start === 'string'){
        let result = [...iterate(start.charCodeAt(), end.charCodeAt())].map((n)=> String.fromCharCode(n));
        console.log('String Iterate: ', result);
    }else{
        let result = [...iterate(start, end)]
        console.log('Number Iterate: ', result)
    }
}

range(1, 10)
range('A', 'K')




/* 2nd Way
function generateRange(start, end) {
    const result = [];
  
    if (typeof start === 'number' && typeof end === 'number') {
      // Generate a range of numbers
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else if (typeof start === 'string' && typeof end === 'string' && start.length === 1 && end.length === 1) {
      // Generate a range of characters
      const startCharCode = start.charCodeAt(0);
      const endCharCode = end.charCodeAt(0);
      
      for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {
        result.push(String.fromCharCode(charCode));
      }
    } else {
      return "Invalid input. Start and end should be of the same type (either numbers or single characters).";
    }
  
    return result;
  }
  
  // Example usage:
  const numberRange = generateRange(1, 5);
  console.log("Number Range: " + numberRange);
  
  const characterRange = generateRange('A', 'E');
  console.log("Character Range: " + characterRange);

  /*

// =============================== && Solution && ==================================

/* 


Output

[1, 2, 3, 4, 5]
["A", "B", "C", "D", "E", "F", "G"]
In the above program, a range of numbers and characters is generated between the upper and the lower bounds.

The iterate generator function is used to iterate through lower and upper bounds.
The spread syntax ... is then used to include all the elements returned by the iterate function.
The charCodeAt() method takes in an index value and returns an integer representing its UTF-16 (16-bit Unicode Transformation Format) code.
The map() method iterates through all the array elements.
The fromCharCode() method converts Unicode values into characters.


*/