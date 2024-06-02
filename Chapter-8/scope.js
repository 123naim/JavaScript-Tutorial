// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// Block scope
// Function scope
// Global scope


// Block scope
{
    let x = 2;
}
// x can NOT be used here


// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.

{
    var x = 2;
}
// x CAN be used here




// Function Scope:
// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// They all have Function Scope:
function myFunction() {
    var carName = "Volvo";   // Function Scope
}

function myFunction() {
    let carName = "Volvo";   // Function Scope
}
function myFunction() {
    const carName = "Volvo";   // Function Scope
}





// Global JavaScript Variables: 
// A variable declared outside a function, becomes GLOBAL.
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}


// Global Scope
// Variables declared Globally (outside any function) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.

// They all have Global Scope:
var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope



console.log('how to work on time')