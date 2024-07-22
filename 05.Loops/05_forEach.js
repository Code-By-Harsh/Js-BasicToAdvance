// Date : 14 July 2024
'use strict' ;

const coding = ["js", "ruby", "java", "python", "cpp"]

// .forEach() Method is Higher Order function() :
coding.forEach( function (val){
    // console.log(val);
} )

// Using With Arrow Function :
coding.forEach( (val) => {
    // console.log(val);
} )

// Passing already exists function to forEach
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe);

// forEach provide three variables :
coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

// Show Error as String is not Array !
const nameOfUser = 'Bhupender Raja' ;
// nameOfUser.forEach(printMe);