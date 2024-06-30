const name = "Harsh"
const age = 18 

// console.log(name + " " + age);
console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('hitesh-hc-com') // create an object of string with key (index) and values (value at index )
// console.log(gameName[0]);
// console.log(gameName.__proto__); // to see prototype of object/string

// console.log(gameName.length); 
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Narkitashu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://HBSC.com/Harsh%20Kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('Harsh'))
console.log(url.includes('Raj'))

console.log(gameName.split('-'));