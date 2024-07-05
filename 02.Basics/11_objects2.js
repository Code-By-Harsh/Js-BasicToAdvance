// Date : 4 July 2024 
'use strict' ;

// const instaUser = new Object()
const instaUser = {}

instaUser.id = "0#345FA4e"
instaUser.name = "Harsh"
instaUser.isLoggedIn = true

// console.log(instaUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            firstName: "harsh",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// Combine the two Objects :
// const combinedObj = { obj1, obj2 } // Not Good !
// const combinedObj = Object.assign({}, obj1, obj2); // Good !
const combinedObj = {...obj1, ...obj2} // Better !
console.log(combinedObj);

// Copy the Object : create shallow copy , not deep !
const copyObj = Object.assign({},obj1);
console.log(copyObj);

// Handle the data come from DataBase :
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "n@gmail.com"
    },
]

// access the any value :
users[1].email ; // first user's email !

// Object Methods :
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty('isLoggedIn'));

// Destructuring Objects 
const india = {
    countryCode : '91' ,
    countryName : 'INDIA' ,
    countryCapital : 'New Delhi' ,
    countriesBigCities : ['Mumbai','Chandigarh','Gurgaon','Ahemdabad','Kolkata'] ,
    countryPopulation : {
        male : '80 Million' ,
        female : '75 Million' 
    }
}

// console.log(india.countriesBigCities); 
// we can also use this :
// const {countriesBigCities} = india;
// console.log(countriesBigCities);

// more efficient way :
const {countriesBigCities : bigCities} = india;
console.log(bigCities);
// or even :
const {countriesBigCities : Cities } = india;
console.log(Cities);
const {countriesBigCities : c } = india;
console.log(c);
