// Date : 2 july 2024
"use strict";
/*
There are 9 ways to create a new date object:
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

// Dates
// let myDate = new Date();
// console.log(myDate.toString());           // Tue Jul 02 2024 19:50:52 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());       // Tue Jul 02 2024
// console.log(myDate.toLocaleString());     // 2/7/2024, 7:50:52 pm
// console.log(myDate.toLocaleDateString()); // 2/7/2024
// console.log(myDate.toLocaleTimeString()); //8:01:07 pm
// console.log(myDate.toTimeString());       //20:01:07 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());        // 2024-07-02T14:29:01.006Z
// console.log(myDate.toUTCString());        //Tue, 02 Jul 2024 14:31:07 GMT
// console.log(myDate.toJSON());             //2024-07-02T14:29:01.006Z
// console.log(typeof myDate);               // Object

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
const day = new Date(2018, 5, 35);
console.log(day); // should be : 2018-06-35 , will be : 2018-07-04

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); // 1719932563535
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // interview question ! (Convert to miliseconds)

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // 7
// console.log(newDate.getDay()); // 2
// console.log(newDate.getFullYear()); // 2024
// console.log(newDate.getHours()); // 21 // 9
// console.log(newDate.getSeconds()); // 33
// console.log(newDate.getTime()); // 1719935133592

/*
JavaScript Stores Dates as Milliseconds
JavaScript stores dates as number of milliseconds since January 01, 1970.

Zero time is January 01, 1970 00:00:00 UTC.

One day (24 hours) is 86 400 000 milliseconds.

Now the time is: 1719929844813 (2/july/24) milliseconds past January 01, 1970
*/
