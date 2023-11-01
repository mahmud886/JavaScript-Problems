/* 
To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation.

*/

// =============================== && Solution && ==================================
// program to encode a string to Base64
// defining the string
const str = "Learning JavaScript"; 

// encoding the string
const result = window.btoa(str);
console.log(result);

// decoding the string
const result1 = window.atob(result);
console.log(result1);
// =============================== && Solution && ==================================

/* 
Output

TGVhcm5pbmcgSmF2YVNjcmlwdA==
Learning JavaScript
In the above example, the btoa() method is used to convert the string to Base64.

The atob() method is used to convert the Base64 to a string.


*/