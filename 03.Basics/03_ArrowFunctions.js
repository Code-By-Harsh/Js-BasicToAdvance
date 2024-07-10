// Date : 7 July 2024
'use strict' ;

// Simple Function Declaration :
function calcAge1(birtYear) {
    return (2024 - birtYear) ;
}
// const amanAge = calcAge1(2003);
// console.log(amanAge);

// Function Expression :
const calcAge2 = function(birtYear){
    return (2024 - birtYear);
}
// const namanAge = calcAge2(2003) ;
// console.log(namanAge);

// Arrow Function : Special form of function expression 
const calcAge3 = birtYear => (2024 - birtYear);
// const harshAge = calcAge2(2004) ;
// console.log(harshAge);

// const mul = (a,b) => (a*b) ;
// const res = mul(4,8);
// console.log(res);

const findPercentage = (num,percentage) => {
    const perc = num * (percentage/100) ;
    const finalPerc = `${percentage} % of '${num}' is : ${perc}.`;
    return finalPerc ;
}

console.log(findPercentage(300,15));

// Date : 10 July 2024 

const userOne = {
    userName : 'Jacklin' ,
    bankBal : 190 ,

    // There are two ways to declare the funtcions inside the objects =>
    // updateMessage: function() {} ;
    updateMessage(){
        // this keyword points to the objects elements  
        // values are not Hard-Coded Here :
        console.log(`Dear Customer , ${this.userName}. Your current bank balance is ${this.bankBal}. `);
        console.log(this); // log the Object , Pointed by this !
    }
}

// call the function :
// Here we call the function with current context !
// userOne.updateMessage() ;
// Let's change the context :
userOne.bankBal = 400 ;
// userOne.updateMessage() ;

// console.log(this); // {} , as here this not pointing any Object so it defaultly point to global / empty / undefined !
// ⚠️ IN BROWSER THIS SIMPLY POINT TO WINDOWS OBJECT BY DEFAULT!

// 'this' in functions :

// function hoo(){
// we cannot use this in function like this :
//     console.log(this);
// }
// hoo(); // undefined 

// const hoo = function(){
//     console.log(this);
// }
// hoo(); // undefined 

// Arrow function :
// const hoo = () => console.log(this) ;
// hoo() ; // {} 

const addTwo = (a,b) => a+b ;
console.log(addTwo(5,6));