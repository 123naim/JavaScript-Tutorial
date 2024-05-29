// 2. The map() method:
// This method gets an array and then transforms the elements of that array as its function pleases and then creates a new array and stores them all in the new array. Imagine we have an array of numbers, and for some reason, we want to double up all of its elements; we can use the forEach loop to get all the elements and then double them up, but we can also use the map() method as well.

// So let’s recheck the oldArray and see how we can work with the map() method:


const oldArray = [10, 20, 30, 40, 50];
const newArray = oldArray.map(function(number){
    return number * 2;
})
console.log(newArray)


// ES6
const newArray2 = oldArray.map(number => number * 2)
console.log(newArray2)


// The important thing about the map() method compared with forEach is that the forEach loop does not actually return anything and also changes the original array. In contrast, the map() method creates a new array.