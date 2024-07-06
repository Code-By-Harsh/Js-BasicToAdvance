// date : 6 july 2024 
'use strict' ;

// 1.Function Declaration :
function funciton_name(Parameters){
    // function body ;
    return Parameters ;
}
// Example of Function Declaration:
console.log(sum(3,8)); // we can use function before its declaration !
// fucntion :
function sum(a,b){
    return (a + b);
}
// Using Function After Declaration in Different ways :
const resSum = sum(5,4);
console.log(resSum);
console.log(sum(2,7)); 
console.log(`${sum(6,9)}`);

// 2.Function Expression (Anonymous Function):
const varName = function(parameters){
    // function body ;
    return parameters ;
}
// Example of Function Expression :
// console.log(add(5,12)); // We can't use function expressin before its declaration !
// Function :
const add = function(a,b){
    return (a+b);
}
// Using Functoin Expression :
const resAdd = add(4,5);
console.log(resAdd);
console.log(add(3,5));
console.log(`${add(3,1)}`); 