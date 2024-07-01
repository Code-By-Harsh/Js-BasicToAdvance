const score = 400;
// console.log(score); // 400
const balance = new Number(100); // create an object type Number
// console.log(balance); // [Number : 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(1)); // 100.0

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // 123.9 (almost round off the number)

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Math Object {}
// console.log(Math.abs(-4)); // convert it to postive number : 4
// console.log(Math.round(4.5)); // round it : 5 (4.1 - 4.4 => 4 , 4.5 - 4.9 => 5)
// console.log(Math.ceil(4.2)); // round it to minimum value ( 4.1 - 4.9 => 4)
// console.log(Math.floor(4.9)); // round it to maximum value ( 4.1 - 4.9 => 5)
// console.log(Math.min(4, 3, 6, 8)); // return minimum value : 3
// console.log(Math.max(4, 3, 6, 8)); // return maximum value : 8

console.log(Math.random()); // return the value between 0 to 1 (not includes pure 0 or 10)
console.log(Math.random() * 10); // return the value between 0 to 10 (not includes pure 0 or 10)
console.log(Math.random() * 10 + 1); // return the value between 1 to 10 (including 1.something and 10.something)
console.log(Math.floor(Math.random() * 10) + 1); // now the value is return between 1 to 10 including 1 and 10 but not point values !

// In Case Of Range :
const min = 10; // min value
const max = 20; // max value
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // return value between min and max value without point value !
