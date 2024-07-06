// Date : 6 July 2024
"use strict";

// Functions :

// ⚠️ A parameter is one of the variables in a function. And when a method is called, the arguments are the data you pass into the method's parameters.
// 1.Functions without argument and return type :
function log() {
  console.log("Jai Shree Ram 🚩");
}
// calling / invoking / running the function :
log(); 
log(); 
log(); 
log(); 

// Refrence of function :
// log ;
// Execution / Calling the function :
// log() ;

// 2.Functions with Parameters :
function Age(age) {
  console.log(`I'm ${age} Years Old !`);
}
// Call the function 'Age' with arguments :
Age(18);
Age(12);

// 3.Functions with Parameters and Return Type :
function average(a, b, c) {
  return (a + b + c) / 3;
}
// Calling Using Direct Console.log :
console.log(average(3, 4, 2));
// Calling and Storing Result :
const res = average(3, 4, 2);
console.log(res);

function fruitJuicer(fruit_a, a, fruit_b, b) {
  const juice = `Your juice 🥤 with ${a} ${fruit_a} and ${b} ${fruit_b} is ready !`;
  return juice;
}

const appleOrangeJuice = fruitJuicer("apples", 3, "Oranges", 2);
console.log(appleOrangeJuice);

const strowBerryBananaJuice = fruitJuicer("strow Berrys", 12, "bananas", 5);
console.log(strowBerryBananaJuice);
