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

// Find Square Root :
console.log(Math.sqrt(25)); // 5 (5*5 = 25)
// Find Square Root :
console.log(25 ** (1 / 2)); // 5 (5*5 = 25)
// Find Cubic Root :
console.log(8 ** (1 / 3)); // 2 (2*2*2 = 8)

// Finding Max value :
console.log(Math.max(1, 10, 11, 22, 13, 14)); // 22
console.log(Math.max(1, 10, 11, '22', 13, 14)); // 22
console.log(Math.max(1, 10, 11, '22i', 23, 14)); // NaN
console.log(Math.max(0, true, false)); // 1

// Find Min value :
console.log(Math.min(1, 10, 11, 22, 13, 14)); // 1
console.log(Math.min(1, 10, 11, 22, 13, false)); // 0

// Find Area of Circle : 2 * pi * (radius = 10px)
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Genrates Random Number Between Given Parameters :
const genrateRandom = (max, min) =>
  Math.floor(Math.random() * (max - min) + 1 + min);

console.log(genrateRandom(10, 20)); // 11 - 20
// console.log(Math.trunc(Math.random() * 10) + 1 + 10);
console.log(genrateRandom(10, -10)); // 11 - 20

// Rounding Integers :
console.log(Math.round(9.4)); // 9
console.log(Math.round(9.5)); // 10
console.log(Math.round(9.6)); // 10

console.log(Math.trunc(9.4)); // 9
console.log(Math.trunc(9.5)); // 9
console.log(Math.trunc(9.6)); // 9

console.log(Math.ceil(9.4)); // 10
console.log(Math.ceil(9.6)); // 10

console.log(Math.floor(9.4)); // 9
console.log(Math.floor(9.6)); // 9

// Dealing with Negative Numbers :
console.log(Math.trunc(-9.4)); // -9
console.log(Math.trunc(-9.6)); // -9
console.log(Math.floor(-9.4)); // -10
console.log(Math.floor(-9.6)); // -10

// Rounding Decimals : Returns a string representing a number in fixed-point notation.
// Parameter — Number of digits after the decimal point.
console.log((1.4).toFixed(0)); // 1
console.log((1.7).toFixed(0)); // 2
console.log((1.7).toFixed(1)); // 1.7
console.log((1.7).toFixed(3)); // 1.700
console.log((1.73652).toFixed(2)); // 1.74
console.log(+(1.7).toFixed(0)); // 2 (Number)
