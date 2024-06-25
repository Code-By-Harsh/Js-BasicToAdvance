// Date : 25 June 2024 !
// Variables are containers for storing information.

// Keyword	                                        Description                                                         	Scope

//  var	                    Var is used to declare variables(old way of declaring variables)	                   Function or global scope
//  let	                             let is also used to declare variables(new way)	                                Global or block Scope
// const	        const is used to declare const values. Once the value is assigned, it can not be modified	    Global or block Scope

// -------------------------------------------------------------------->
const userId = 12213 ;

// let is a keyword introduced in ES6 for declaring variables in JavaScript.
// Unlike variables declared with var, which are function-scoped, let allows for declaring block-scoped variables.
// This means a variable declared with let is limited to the block, statement, or expression where it is used .
let userEmailId = "harshKumar@gmail.com" ;

// It is mostly ignored by Coders , So Avoid it as much possible !
// The var keyword was used in all JavaScript code from 1995 to 2015.
// The var keyword should only be used in code written for older browsers.
// The let and const keywords were added to JavaScript in 2015.
var userPassword = "12345678" ;

// We can declare an variable and preserve it in memory without specify any variable type (const , let , var).
// But again avoid it , not good practice to do !
userCity = "Kurukshetra" ; 

// When we create a variable and not assign an value to it so by default it is "undefined" ,
// but not in const case , in case of const we have to specify const variable value with intialization.
// undefined , untill we assign some value to it !
let userStatus ; 
console.log(userStatus) ;

// Try to Change the values :

// userId = 12343 ; 
// show error : TypeError: Assignment to constant variable.
userEmailId = "harshSaini@gmail.com" ;
userPassword = "iLoveYou" ;
userCity = "Gurgaon" ;
userStatus = "Active" ;

// The console.table() static method displays tabular data as a table.
// This function takes one mandatory argument data , which must be an array or an object, and one additional optional parameter columns .
// It logs data as a table.
console.table([userId ,userEmailId ,userPassword, userCity , userStatus]);
