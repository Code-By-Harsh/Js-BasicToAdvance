// Date : 28 June 2024
"use strict";

// Basic Comparison :
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
console.log(2 === 1);

// Comparison With Strings : First Understand the conversion 'to string'
// console.log("2" > 1); // true [string contain numbers so it converts into 2 (2 > 1)]
// console.log(" " > 1); // false [empty string will converts to 0 (0 > 1)]

// Comparison with Null
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// The reason is that an equality check == and comparisions >,<,>= and <= work differently .

const num = "23";
const number = 23;

//  abstract equality Operator Check ( == ) :
if (num == number) {
  console.log("Loosly Equals"); // Equals
} else {
  console.log("Not Loosly Equals");
}

// Strict Cheack ( === ) :
// It not only check the value but also check the data type of values :
if (num === number) {
  console.log("Strictly Equals");
} else {
  console.log("Not Strictly Equals"); // Not Strictly Equals
}
