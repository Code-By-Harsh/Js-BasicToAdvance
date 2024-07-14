// Date : 14 July 2024
'use strict'; 

// for - in 

// With Objects :
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// With Arrays :
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

// With Maps :
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// Not computed as map are not iterable with for-in
for (const [key,value] in map) {
    console.log(key,value);
}