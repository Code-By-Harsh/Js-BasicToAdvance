// Date : 3 July 2024
"use strict";

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// to join both arrays :
// Method 1 (Bad)                   // at once only push one array !
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);       // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash

// Method 2 (Ok)                    // at once only concat one array
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);           // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Method 3 (Good) : Using Spread (...) Operator // at once can join n numbers of array [...1,...2,...3,. . .,...n]
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Method 4 (Very Good) : for complex array's structures : can perform only one array me be result array of any request or function
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// .flat(depth) : Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// [
//  1, 2, 3, 4, 5,
//  6, 7, 6, 7, 4,
//  5
// ]

// To check wheter the founded value is Array or not ?
console.log(Array.isArray("Hena")); // false
console.log(Array.isArray(true)); // false
console.log(Array.isArray(["Harsh"])); // true
console.log(Array.isArray({ name: "Harsh" })); // false
console.log(Array.isArray(["Harsh", "Ram", "Arushi"])); // true

// console.log(typeof "Hena", typeof true, typeof ["Harsh"]);
// String Boolean Object(typeof show array as a object !)
console.log(typeof real_another_array); // Object

// Convert to Array :
// .from : Creates an array from an iterable object.
// .of : Returns a new array from a set of elements.
console.log(Array.from("Harsh")); // String => [ 'H', 'a', 'r', 's', 'h' ]
// console.log(Array.of("Harsh"));                     // String => [ 'Harsh' ]
console.log(Array.from({ name: "Harsh" })); // interesting , from Object => [] (js confuse that whether to create array of keys or values !)
// console.log(Array.of({ name: "Harsh" }));           // [{ name: 'Harsh' }]
console.log(Array.from(true)); // Boolean => []
// console.log(Array.of(true));                         // [ true ]
console.log(Array.from(43123)); // Numbers => []
// console.log(Array.of(43123));                        // [ 43123 ]
console.log(Array.from(("Ram", "Sita", "Lakshman"))); // last String : ['L', 'a', 'k', 's', 'h', 'm', 'a', 'n'] ?
// console.log(Array.of(("Ram", "Sita", "Lakshman")));  // last String :  ['Lakshman'] ?
console.log(Array.from((100, 200, 300))); // Numbers => [] ?
// console.log(Array.of((100, 200, 300)));              // Numbers => [300] ?

// Solution for line 54 - 57 :
let a = "Shri Ram";
let b = "Ma Sita";
let c = "Lakshman ji";
console.log(Array.of(a, b, c)); // [ 'Shri Ram', 'Ma Sita', 'Lakshman ji' ]
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300]
