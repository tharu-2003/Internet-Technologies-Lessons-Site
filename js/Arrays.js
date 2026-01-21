console.log("Arrays.js loaded...");

// 1. Creating an Array

// Using Array Literal
let colors = ["Red", "Yellow", "Blue"];
console.log(colors);

console.log("===========================");

// Using "new" keyword & Array constructor
let colors2 = new Array ("Red", "Yellow", "Blue");
console.log(colors2);

console.log("===========================");

// Using all types in array
let array =[ 10, 'Sachini', true, undefined, null, {name: 'John'}, [1,2,3]];
console.log(array);

console.log("===========================");


// 2. Accessing Elements
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);  // undefined ->let colors = ["Red", "Yellow", "Blue"]; array length =3
    
console.log("===========================");


// 3. Modifying Elements
colors[0] = "Green";
console.log(colors);

// 4. Array Length
console.log(colors.length);

console.log("===========================");

// Build in Array Functions

let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];


// 5.push() -> Add new elements to the end an array
fruits.push('Grapes');
console.log(fruits);

// let items = [];

// items.push({
//     id:1,
//     itemName:"Laptop"
// });
// console.log(items);

// items.push({
//     id:2,
//     itemName:"Mobile"
// });
// console.log(items);


// 6. pop() -> Remove the last elements from an array
fruits.pop();
console.log(fruits);

// 7. unshift() -> Adds new elements to the beginning of an array
console.log(fruits.length);
fruits.unshift('Strawberry');
console.log(fruits);
console.log(fruits.length);

// 8. shift() -> Remove the first element from an array
fruits.shift();
console.log(fruits);
console.log(fruits.length);

fruits.splice( 0,0, "batu");
console.log(fruits);

// 9. concat()

let vegetables = ['Tomato','Potato','Onion'];

let items = fruits.concat(vegetables);
console.log(items);

// 10.forEtch

items.forEach(item => console.log(item));

// 11. Map
let upperCaseItem = items.map(item => item.toUpperCase());
console.log(upperCaseItem);
console.log(items);

// 12. filter

let filteredItems = items.filter(item => item.length > 6);
console.log(filteredItems);