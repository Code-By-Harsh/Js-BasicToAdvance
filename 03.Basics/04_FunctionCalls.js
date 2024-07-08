// Date : 8 july 2024
'use strict';

// Function To Function Call :
// Example #1 :
const cutFruitPieces = (fruit) => fruit * 4;
// function cutFruitPieces(fruit){
//     return fruit = 4 ;
//};

const fruitProcessor = (fruitA, fruitAName, fruitB, fruitBName) => {
  const fruitAPieces = cutFruitPieces(fruitA); // calling other fun.
  const fruitBPieces = cutFruitPieces(fruitB); // calling other fun.
  const juice = `Juice 🥤 with ${fruitAPieces} pieces of ${fruitAName} and ${fruitBPieces} pieces of ${fruitBName} is ready.`;
  return juice;
};

console.log(fruitProcessor(2, 'apple', 3, 'orange'));

// Functions To Function Call 
// Example #2 :

const calcAge = birthYear => (2024 - birthYear);

const yearsUntilRetirement = function(birthYear,firstName) {
    const age = calcAge(birthYear); 
    const retirement = 65 - calcAge(birthYear) ;

    return ((retirement > 0) ? `${firstName} retires in ${retirement} years.` : `${firstName} has already retired ✌️.`) ;
}

console.log(yearsUntilRetirement(2004,'Harsh'));
console.log(yearsUntilRetirement(1992,'Akash'));
console.log(yearsUntilRetirement(1947,'Ruhi'));