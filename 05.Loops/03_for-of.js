// Date: 14 June 2024 
'use strict' ;

// for - of

// With - Arrays
const arr = [1, 2, 3, 4, 5] ;
for (const num of arr) {
    // log the each element (num) of arr
    // console.log(num);
}

// With - Strings
const greetings = "Hello world!" ;
for (const greet of greetings) {
    // log each char (greet) of greetings
    // console.log(`Each char is ${greet}`)
};

// With - Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('PAK', "Pokistan")

// console.log(map);
// Here we destructure the data into key and value 
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// With - Objects
const myObject = {
    name: 'Harsh',
    contact: '+91-95188-16505'
}

// Show error as Objects are not iterable !
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
