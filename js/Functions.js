console.log("Functions.js is loaded");

function greet(name){
    if(typeof name === "undefined"){
        console.log("Hello World");
    }
    else{
        // console.log("Hello " + name);
        // console.log("Hello ",name);
        console.log(`Hello ${name}`);
    }
}
greet("Tharusha");
greet();

let greet2 = function(name){
    console.log(`Hello ${name}...!`);

}
greet2("Tharusha");

// 3. Arrow Function

let greet3 = (name) => {
    console.log(`Hello ${name}...!`);
}
greet3("Tharu");

let greet4 = name =>  console.log(`Hello ${name}...!`);

greet4("Sachioooo");

// 4.Default pramiters

let greet5 = (name = "Sachini") => {
    console.log(`Hello ${name}...!`);
}
greet5("Tharu");
greet5();

// 5.Rest paramiters
let sum = (...numbers) => {
    numbers.forEach(number => console.log(number));
    
}
sum(1,2,3,4,5);