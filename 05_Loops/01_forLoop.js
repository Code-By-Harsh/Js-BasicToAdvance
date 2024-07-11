// Date : 11 July 2024
'use strict' ;

// for - loop , Break , Continue :
for (let i = 0; i < 5; i++) {
    if(i === 3){
        // console.log("3 !");
    
        break ; // break , stop the execution of iteration immediately and exit the loop !

        // continue ; // continue , skip the furter execution of current iteration and jump to next iteration !
    }
    // console.log(i);
}

// We cannot access any private / local variable of any loop outside of that loop :
// console.log(i); 

// We Can Also Use For-Loop As :
let i = 1 ;
for( ;i < arr.length;){
    i++ ;
    // console.log(arr[i-1]) ;
}

const arr = ['Harsh','Aman','Naman','Lakhi','Rohit'];

// PRINT ALL ELEMENTS OF ARRAY :
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
}

// PRINT TABLE OF 2 :
for(let i = 1 ; i <= 10 ; i++){
    console.log(`2 * ${i} = ${2 * i}`)
}

// PRINT ALL EVEN NUMBERS FROM 0 TO 20 :
for(let i = 1 ; i <= 20 ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}