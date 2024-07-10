// Date : 10 July 2024 
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