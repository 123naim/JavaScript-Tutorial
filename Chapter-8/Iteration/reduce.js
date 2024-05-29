// 3. The reduce() method:
// The reduce() method gets an array and reduces it to a single value. For example, let’s assume that we have an array of numbers and we want to get the total amount of numbers, we can create a new variable and set it to zero, and by using a for loop, we can add every single element of the array to the variable we have just created. Or we could just provide a reducer function to reduce() method as the following:


// ES5
const myArr = [1, 2, 3, 4];
const reducAmount = myArr.reduce(function(accumulator, value){
    return accumulator + value
})
console.log(myArr)



// ES6
const myArr2 = [1, 2, 3, 4];
const reducAmount2 = myArr.reduce((acc, value) => acc + value, 0)
console.log(reducAmount2)


// How to use reduce() method like a pro:
// We mentioned that reduce() gets an array and reduces it to a single value but keep in mind that this value can also be an object or a new array as well. We can also have an initial amount for this value and then reduce an array and store it alongside the default value. For example, imagine we have an array. We want to reduce it to a new array (as mentioned, we can reduce an array to a value that can be an array as well).

// We also want to add some extra elements to the new array that are not in the oldArray, so we can simply pass an array with the elements we want and then reduce the oldArray into it. I know it might sound a little unclear so let’s see it in code. In the previous example, we get the total amount of an array element, but now we want to add the total amount to an initial value we desire, and that’s when we can pass another argument to the reduce() method, which is the beginning state of accumulator As shown in the code below, we have given 10 as the second argument.

const oldArray = [1, 2, 3, 4];
let sum = oldArray.reduce((accumulator,currentValue) => {
 return accumulator + currentValue;
},10); 
console.log(sum); // 20 ((1+2+3+4)+10)


// The reducer function takes four arguments:
// accumulator
// currentValue
// currentIndex
// array
// So let’s jump into another example to see all of them in action: imagine that we have an array of numbers and want to find the average of that array. Indeed, we can use a for loop as well but let’s see how we can do this using reduce method:

const numArray = [10, 20, 30];
const average = numArray.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    accumulator += currentValue;
    return currentIndex === array.length - 1 ? 
      accumulator / array.length : accumulator
  }
); 
// we have not provided an initial value


// console.log(average); // 20
// Please keep in mind that If the initial value is not provided, reduce method will execute its callback function starting at index 1 and skips the first index. But if the initial value is provided, it will start at index 0. If the array is empty and no initial value is provided, TypeError will be thrown.

// And for the last tip, instead of using both map() method and filter() method, you can do the job by only using the reduce() method because this approach traverses the array once and not twice.