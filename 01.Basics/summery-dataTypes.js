//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Numbers
const score = 100
const scoreValue = 100.3

// String 
const userName = 'Harsh' ;

// Boolean 
const isLoggedIn = false

// Null 
const outsideTemp = null

// Undefined
let userEmail;

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// BigInt
// const bigNumber = 3456543576654356754n

// Reference (Non primitive) : Array, Objects, Functions
// Objects
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

// Function
const myFunction = function(){
    console.log("Hello world");
}

// Array :
const charactersName = ['H','A','R','S','H'];

// ------------------------------------------->

// Stack (Primitive) / Heap (Reference)
// When we Copy an variable to other so Primitive values copied as value no address or refrence for that variable is shared , whereas in Reference variables like objects, arrays and function when we copy them from one to another so they share same address and reference !

// Stack (Primitive) =>
let userPassword = "myPasswordIs091" ;
let hackedUserPassword = userPassword ; // Copy the value only 
hackedUserPassword = "passwordChanged ! " ; // we can easily change the value , not affect other variable from which it is copied !

console.log(userPassword);
console.log(hackedUserPassword);

// Heap (Non Primitive) =>
const me = {
    name : "Harsh" ,
    age : 19 ,
    money : "120$"
}

const myFriend = me ; // share same reference / address 
myFriend.money = "200$" ;

console.log(me.money); // this value should be 120$ , but it will be 200$ that's because this is share same refernce with copied copy object .
console.log(myFriend.money); // 200$