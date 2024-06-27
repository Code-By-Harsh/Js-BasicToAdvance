// Date : 27 June 2024
"use strict";

// Type Conversion : In JavaScript, type conversion (also known as typecasting) refers to changing the data type of a value to a different one.
// JavaScript variables can be converted to a new variable and another data type:
// # Explicit Conversion - Manual type conversion By the use of a JavaScript function
// # Implicit Conversion - Automatic type conversion by JavaScript itself

const num = 123;      // number
const sN = "112";     // stringNumber
const sC = "Harsh";   // stringChar
const sM = "June-27"; // stringMix
const bT = true;      // booleanTrue
const bF = false;     // booleanFalse
const nV = null;      // nullValue
let uV;               // undefinedValue

// Type Conversion To Number => Number(another type) ;
// 1. Number(stringNumber) = stringNumber
// 2. Number(stringChar) = NaN
// 3. Number(stringMix) = NaN
// 4. Number(undefinedValue) = NaN
// 5. Number(booleanTrue) = 1
// 6. Number(booleanFalse) = 0
// 7. Number(nullValue) = 0

// Type Conversion To Boolean => Boolean(another type) ;
// 1. Boolean(stringNumber) = true
// 2. Boolean(stringChar) = true
// 3. Boolean(stringMix) = true
// 4. Boolean(emptyString) = false
// 5. Boolean(undefinedValue) = false
// 6. Boolean(1) = true
// 7. Boolean(0) = false
// 8. Boolean(nullValue) = false
// 9. Boolean(number != 0) = true

// Type Conversion To String => String(another type) ;
// 1. String(undefinedValue) = undefined
// 2. String(booleanTrue) = true
// 3. String(booleanFalse) = false
// 4. String(number) = number
// 5. String(nullValue) = null
