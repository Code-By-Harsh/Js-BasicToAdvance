// Date : 10 July 2024 
'use strict';
// Immediately Invoked Function Expression (IIFE)

// We have to create a function that execute only once in starting of program / web , so first way is to create something like :
function fnOne(){
    console.log('Welcome Chief !');
};
// fnOne() ;

// but we can again call this (by mistake , other):
// fnOne() ;

// Solution is to use IIFE :
// IIFE's with Function name is called 'Named IIFE' :
// (function fnOne(){
    //     // This is log only once !
    //     console.log('Welcome Chief !');
    // })() ;
    
// IIFE with Arrow Function :
// (fnTwo = () => console.log('System Steup Completed !')();

// Simply we don't want to reuse function , declared in IIFE so we ignore to name functions in IIFE that IIFE known as Simple IIFE :
(function(){
    // This is log only once !
    console.log('Welcome Chief !');
})() ;

(() => console.log('System Steup Completed !'))();

// Pass the arguments to IIFE :
((userName) => console.log(`User Name : ${userName}.`))('Harsh');

// More About IIFE :
// Execute only once !

// (function () {
//   console.log(`This will never run again !`);
// });
// But it not execute yet , and even we never called it !
// So let's call it too : using () 
(function () {
  console.log(`This will never run again ! [Using IIFE]`);
})();
// Ya ! This works , Immediately Invoked Function Expression!

// ------------> Scoping with IIFE
// publicMember declared in Global Scope :

const publicMember = 'Rajchuhanastri ghriyadi';
(() => {
  // we can access global scope variables :
  console.log(`publicMember is : ${publicMember}`);
  // privateMember declared in local Scope of IIFE :
  const privateMember = 'Harsh Saini';
})();

// we cannot access the variable of any local scope :
// console.log(privateMember); // ⚠️ Show Error !

// This all because of privateMember is encapsulate with private/local function scope of IIFE , and this is extremely important concept in programming . It helps to secure our private variables from being overwritten by some other parts of the program Or even external scripts or libraries.

// And it's important to keep hide variables and that scopes are a good tool for doing this.And this is also the reason why The IIFE were invented !