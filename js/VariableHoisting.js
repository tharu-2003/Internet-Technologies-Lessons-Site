console.log("VariableHoisting.js loaded...");

// ============= var =============
console.log(x); // undefined
var x = 10;
console.log(x); // 10 

// ----------------------------------

// ============= let =============
console.log(y); //ReferenceError: Cannot access 'y' before initialization
const y = 20;

