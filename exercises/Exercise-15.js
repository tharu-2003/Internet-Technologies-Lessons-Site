console.log("Exercise-15.js is loaded...!");

let number = "1";
let intervalId = setInterval(function(){
    // if(number >= "1" && number <= "10"){
        console.log("Number : "+(number++));
    // }else{
    //     clearInterval(intervalId);
    // }
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10500);