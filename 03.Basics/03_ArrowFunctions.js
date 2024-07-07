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