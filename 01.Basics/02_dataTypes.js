"use strict"; // treat all JS code as newer version
console.log(3 + .3); // we can perform arithmetic operations in the console.log() 

// In JavaScript , we have 7 types of Basic Data Types :
// number => 0,2,-5,0.42,1.523... 
// bigint => large numbers !
// string => "Harsh" / 'Rahul' , '12AB9.Fo#' (can contain mix of numbers,alphabets and symbols)
// boolean => true / false
// null => Standalone value
// undefined => When we define an variable but not assign any value to that
// symbol => for uniquness

let age = 19 ; // number
let ageInSec = 616118400 ; // bigInt (but js count it as number) !
let dateOfBirth = '17 Dec 2004' ; // String
let isAdult = true ; // Boolean
let girlFriend = null ; // Null
let goal ; // Undefined

// typeof : The JavaScript typeof operator returns the data type of a variable or expression.
console.log(typeof age); // number
console.log(typeof ageInSec); // number 
console.log(typeof dateOfBirth); // string
console.log(typeof isAdult); // boolean
console.log(typeof girlFriend); // Object 
console.log(typeof goal); // undefined