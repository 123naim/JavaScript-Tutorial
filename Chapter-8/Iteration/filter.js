// 1. So let’s begin with the filter() method:
// The filter() method applies to an array and then creates a new array, and on the new array, it filters the first array based on the function we provided. For example, let’s just assume that we have an array called oldArray which holds a few elements, and we want just to keep some specific members of it and store them in a new array called newArray so that we can use the filter() method for this purpose:


const arr = [1, 2, false, null, 3, 5, 6, '', 'string', 9, 6];
const arr2 = arr.filter (value => typeof value === 'number')
console.log(arr2)

const oldArray = [10, 20, 30, 40, 50];
const newArray = oldArray.filter(function(number){
    return number > 35
})
console.log(newArray);


// We can also use the arrow function as well in ES6 as the following:
const oldArray2 = [10, 20, 30, 40, 50];
const newArray2 = oldArray2.filter(number => number > 35)
console.log(newArray2)


// Keep that in mind that you can also define a function and call it here as well

// There are two essential things about the filter method:

// It creates a new array, so we still have the original array if we log the oldArray above.
// The function we pass to the filter method actually throws us a True/False, so whether the element is going to be a part of a newArray or not.
// The filter() method is mainly used when we have the complete data and we just want to show a specific group of the items we want; for example, we have a list of all of the books in a bookstore, and we want to show only the Physics book.