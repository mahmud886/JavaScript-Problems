/* 
To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String split()
Javascript String substring()
JavaScript String lastIndexOf()

*/

// =============================== && Solution && ==================================
function getFileExtension(filename) {
    const extension = filename.split('.').pop()

    return extension;
}
const result1 = getFileExtension('module.js')
console.log(result1);
const result2 = getFileExtension('module.txt')
console.log(result2)
// =============================== && Solution && ==================================

/* 
Output

js
txt
In the above program, the extension of the filename is extracted using the split() method and the pop() method.

The filename is split into individual array elements using the split() method.
Here, filename.split('.') gives ["module", "js"] by splitting the string.
The last array element, which is the extension, is returned using the pop() method.

*/