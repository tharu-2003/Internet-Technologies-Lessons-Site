console.log("Objects.js loaded...");

// Creating an object - Object Literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "swimming", "coding"],
    address: {
        street: "123 Main St",
        city: "NewYork",
        state: "NY"
    },
    getBirthYear: function (){
        return 2025 - this.age;
    }
}
console.log(person);

console.log("==============================================================");

// 1. Accessing object properties

// 1.1 Dot Notation
console.log(person.firstName);
console.log(person.lastName); 
console.log(person.age);
console.log(person.hobbies);
console.log(person.address.city);
console.log(person.getBirthYear());

console.log("==============================================================");

// 1.2 Bracket Notation
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["hobbies"]);
console.log(person["address"]["city"]);
console.log(person["getBirthYear"]());

console.log("==============================================================");

//--------------------------------------------------------------------------------------------------------------

// 2. Adding new properties to an object
person.phone = "123-456-7890";  // set phone number
console.log(person);

console.log("==============================================================");

//--------------------------------------------------------------------------------------------------------------

// 3. Modifying existing properties of an object
person.firstName = "Jane";
console.log(person);

console.log("==============================================================");

//--------------------------------------------------------------------------------------------------------------

// 4. Delete a property from an object
delete person.address;
console.log(person);

console.log("==============================================================");

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    getDescription: function(){
        return `The ${this.brand} - ${this.model} - ${this.year}`;
    }
}
// console.log(car.getDescription()); //1 way to call the function
let description = car.getDescription(); // 2 way to call the function
console.log(description);

console.log("==============================================================");

// Looping object properties
for (let key in person) {
    console.log(person[key]); // only print the values
    // console.log(key); // only print the keys
    // console.log(key, person[key]); // print both keys and values
}

console.log("==============================================================");

// Object Distructing 
let {firstName, lastName, age} = person;
console.log(firstName);
console.log(lastName);
console.log(age);
// console.log(hobbies); //ReferenceError: hobbies is not defined

console.log("==============================================================");

//--------------------------------------------------------------------------------------------------------------

// Building - in Object functions

// 1. Object.keys()
console.log(Object.keys(person));

console.log("==============================================================");

// 2. Object.values()
console.log(Object.values(person));

console.log("==============================================================");

// 3. Object.entries()
console.log(Object.entries(person));

console.log("==============================================================");

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
class Student{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName} ${this.age}`;
    }
}
let Students =  new Student("John", "Doe", 30);
console.log(Students.getFullName());