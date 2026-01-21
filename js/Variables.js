console.log("Variables.js is loaded ..!");

let x = 10;
console.log(x);

function testVar(){
    console.log(x + 5);
    x = 20;
    console.log(x);
    var y =30;
    console.log(y)
}
testVar();
console.log(x)
// console.log(y)


// let x = 10;
// console.log(x);

// function testLet(){
//     console.log(x);
//     let y = 20;
//     console.log(y);

//     if (true) {
//         console.log(x);
//         console.log(y);
//         let z = 301;
//         console.log(z);
//         var a = 40;
//         if (true) {
//          var c = 45;   
//         }
//     } 
//     console.log(y);
//     // console.log(z);
//     console.log(a);
//     console.log(c);

// }

// testLet();


// // const x = 10;
// // console.log(x);

// // x =20;