const arr = [1, 3, 4, 5, 7, 8];
const sum = arr.map(v => {
    return v * v * v;
})
console.log(sum)


const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(number => number * 2);
const doubledNumbers = numbers.map(numbers => numbers * 2);
console.log(doubledNumbers)

const sum2 = numbers.reduce((accumulator, value) => accumulator + value);
console.log(sum2)

const sum3 = doubledNumbers.reduce((acc, value) => acc + value, 0)
console.log(sum3)