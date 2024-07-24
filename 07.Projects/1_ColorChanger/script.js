// Date : 24 July 2024 
'use strict';

const body = document.querySelector('body');
const boxes = document.querySelectorAll('.button')

// boxes[0].addEventListener('click',function(e){
//     funtion body : 
// })

boxes.forEach(function(box , i){
    box.addEventListener('click',function(e){
        // Changing Bg Color :
        console.log(`Background Color Changed to ${box.id}`);
        body.style.backgroundColor = `${box.id}` ;
    })
})