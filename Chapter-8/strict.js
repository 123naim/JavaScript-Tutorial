// "use strict";
// let x;
// x = 32;
// console.log(x)

// let y;
// y = 3;
// console.log(y)

// "use strict"
x = 4;       // This will not cause an error.
myFunction();

function myFunction() {
//   "use strict";
  let y;
  y = 3.14;   // This will cause an error
  console.log(y)
}
console.log(x)