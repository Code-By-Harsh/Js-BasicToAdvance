// Date : 4 July 2024
"use strict";

// singleton Objetcs :
// Object.create;

// Object literals :
// const harsh = {} ;

// Objects :

// Array Declaration :
const harshArray = [
  "Harsh",
  "Saini",
  2004,
  19,
  ["Naman", "Aman", "Lakhi"],
  "Bachelors Of Computer Application",
];

// console.log(harshArray[4]); // to access the friends of the harsh !

// Object Declaration :
const harshObject = {
  firstName: "Harsh",
  lastName: "Saini",
  birthYear: 2004,
  age: 19,
  friends: ["Naman", "Aman", "Lakhi"],
  study: "Bachelors Of Computer Application",
  gmail: "hs896048@gmail.com",
};
// console.log(harshObject);

// Methods of accessing values :
// Using Dot Product =>
// const objectName = harshObject.firstName + ' ' + harshObject.lastName;
// const objectAge = harshObject.age ;

// console.log(objectName);
// console.log(objectAge);
// console.log(harshObject.friends);

// Using Bracket Notation =>
// console.log(harshObject["firstName"]); // Harsh

const nameKey = "Name";
// console.log(harshObject["first" + nameKey]); // Harsh
// console.log(harshObject["last" + nameKey]); // Saini

// console.log(harshObject["friends[0]"]); // Don't show (undefined)
// console.log(harshObject.friends[0]);

harshObject.gmail = "hs896048@yahoo.com"; // it is changed !
// Object.freeze(harshObject); // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// harshObject.gmail = "hs896048@bing.in"; // show error
// console.log(harshObject.gmail);

// Adding function to Object :
harshObject.greetings = function () {
  console.log("Hello Bhai !");
};
harshObject.greetings();

harshObject.aboutMe = function () {
  console.log(
    `Hello sir I'm ${this.firstName} ,
a ${this.age} years old Student , studying 
"${this.study}" `
  );
};
harshObject.aboutMe();
