// Date : 3 july 2024
"use strict";
// Arrays in Js :

const friends = ["Naman", "Aman", "lakhvinder"]; // 1st method to declare array
// console.log(friends); // to print all array
// console.log(friends[0]); // to print 1st element of the array 'friends'
// console.log(friends[1]); // to print 2nd element
// console.log(friends[2]); // to print 3rd element

// To change specific element :
friends[1] = "Aman saini";
// console.log(friends);

// To add new element :
friends[3] = "jay";
// console.log(friends);

// 2nd method to declare the array
const years = new Array(1947, 1981, 2004, 2014, 2024);
// console.log(years);

// To find length :
// console.log(friends.length);
// console.log(years.length);

// Without calculate elements of the array access the last element :
// console.log(years[years.length - 1]);
// console.log(friends[friends.lenth - 1]);

// to access last second :
// console.log(friends[friends.length - 2]);

// array can store multiple types values :
const Harsh = ["Harsh", "Saini", 2024 - 2004, "Student", friends];
// console.log(Harsh);

// pass the array as value :

// let a function for calculate age from providing the birthyear :
const calcAge = (birthYear) => 2024 - birthYear;
// console.log(calcAge(2004));
// now let we have to create a new array where we pass an array to this function with the values of birthYears and than new array will store the age that produce by the calcAge function for every unique value in array

const birthYears = [1990, 2004, 2007, 2017, 2019, 2021];

// console.log(calcAge(birthYears)); // show error or NaN
const fun = (indexInArray) => calcAge(birthYears[indexInArray]);

// const agesByBirthYears = [calcAge(birthYears[0]),
// calcAge(birthYears[1]),
// calcAge(birthYears[2]),
// calcAge(birthYears[3]),
// calcAge(birthYears[4]),
// calcAge(birthYears[birthYears.length - 1])] ;

const agesByBirthYears = [fun(0), fun(1), fun(2), fun(3), fun(4), fun(5)];
// console.log(agesByBirthYears);

// Methods to manipulate array :
const arr = [1, 2, 3, 4, 5];

// To add new elements in the array :
// In Starting :
arr.unshift(0);
// console.log(arr); // [0, 1, 2, 3, 4, 5]
// In Ending :
arr.push(6);
// console.log(arr); // [0, 1, 2, 3, 4, 5, 6]
// In Middle :
arr[3] = "3_A";
// console.log(arr); // [0, 1, 2, '3_A', 4, 5, 6]

// To Delete an elements from the array :
// from the Starting :
arr.shift();
// console.log(arr); // [1, 2, '3_A', 4, 5, 6]
// from the Ending :
arr.pop();
// console.log(arr); // [1, 2, '3_A', 4, 5]
// from the Middle : No Way !

console.log("Array: ", arr); // [ 1, 2, '3_A', 4, 5 ]
const slicedArray = arr.slice(1, 3); // arr[1], arr[2]
console.log("Array after Slice: ", arr); // [ 1, 2, '3_A', 4, 5 ]
console.log("Sliced-Array", slicedArray); // [ 2, '3_A' ]

console.log("Array: ", arr); // [ 1, 2, '3_A', 4, 5 ]
const splicedArray = arr.splice(0, 3); // arr[0], arr[1], arr[2]
console.log("Array after splished: ", arr); // [ 4, 5 ]
console.log("Spliced-Array", splicedArray); // [ 1, 2, '3_A' ]

// To find an elements index number =>
const rankOfStudents = ["Naman", "Aman", "Harsh", "Saurav", "Parkash", "Neha"];
const harshRank = rankOfStudents.indexOf("Harsh");
// console.log(harshRank); // 2
// console.log(harshRank + 1); // 3 : as array starts from 0 instead of 1

const namanRank = rankOfStudents.indexOf("Naman");
// console.log(namanRank); // 0 : means the element named Naman in the array 'rankOfStudents' located at 0th position (1st) .

// New ES6 feature : includes
// .includes() provide the boolean values where true means an element is in the array and false means it is not !
const isHarshAvailable = rankOfStudents.includes("Harsh"); // Here we cheack whteher harsh element is in the array or not !
// console.log(isHarshAvailable); // true
const isEtiDataAvailable = rankOfStudents.includes("Eti");
// console.group(isEtiDataAvailable); // false
