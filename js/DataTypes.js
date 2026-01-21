console.log("DataTypes.js is loaded..!")
console.log("=================================");


// 1. Number
let num1 = 10;
let num2 = 10.5;
console.log(typeof num1);
console.log(typeof num2);

console.log("=================================");

// 2. String
let name = "Tharusha";
console.log(typeof name);

console.log("=================================");

// 3. Boolean
let isOk = true;
console.log(typeof isOk);

console.log("=================================");

// 4. Undefined
let x;
console.log(x)
console.log(typeof x);

console.log("=================================");

// 5. Null
let y = null;
console.log(y);
console.log(typeof y);

console.log("=================================");

// 6. BigInt
let bigIntValue = 54654646464651234437414654214n;
console.log(bigIntValue);
console.log(typeof bigIntValue);

console.log("=================================");
// ==================================================== Non Primitive Data types (Referens data types)

// 7. Objects
let person = {
    firstName: "Tharusha",
    lastName: "Sandaluwan",
    age: 30
}
console.log(person);
console.log(typeof person);

console.log("=================================");

// 8. Arrayes
let color = ["Red" , "Green" , "Pink"];
console.log(color);
console.log(typeof color)

console.log("=================================");

//  9. Funtion
function greet(){
    console.log("Hello World..!");
}
greet();
console.log(typeof greet)

console.log("=================================");

// 10. Date
let today = new Date();
console.log(today);
console.log(typeof today);

console.log("=================================");
