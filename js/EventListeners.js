console.log("EventListeners.js is loaded ...");

// const box =document.querySelector('.box');

//====================== Mouse Event =============================

// Single Click Event
// box.addEventListener('click', function (){
//     console.log("click the box.!")
// });

// Double Click Event
// box.addEventListener('dblclick', function () {
//     console.log("Double Clicked the box..!");
// });

// Mouse Down
// box.addEventListener('mousedown', function (){
//     console.log("Mouse Pressed on the box ..!");
// })

// Mouse relese
// box.addEventListener('mouseup', function(){
//     console.log("Mouse relesed..!");
// });

// Mouse move
// box.addEventListener('mousemove', function(){
//     console.log("Mouse moved..!")
// })

//Mouse overed
// box.addEventListener('mouseover', function(){
//     console.log("Mouse overed..!")
// })

// mouse out
// box.addEventListener('mouseout', function(){
//     console.log("Mouse out..!")
// })

//====================== Keybord Event =============================

let input = document.getElementById('input');

// ------------- key down -------------------

// input.addEventListener('keydown', function(event){
//     console.log("button down");

//     // console.log(Event)

//     // if(event.key == "Enter"){
//     //     alert('enter presed')
//     // }
// });

// ------------- key up -------------------

// input.addEventListener('keypress', function(event){
//     // console.log(Event);
//     console.log("buton up");
// });

// =================================

input.addEventListener('keydown', function(event){
    console.log(event.keyCode);
    let keyCode = event.keyCode;

    if((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)){
        return;
    }
    event.preventDefault();
});