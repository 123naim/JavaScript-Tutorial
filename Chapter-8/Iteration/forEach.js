const arr = [1, 3, 4, 5, 7, 8]
let sum = 0;
arr.forEach(v => sum += v)
console.log(sum)

const arr2 = [3, 5, 2, 5, 7, 9];
let sum2 = 0;


arr2.forEach(function(v){
    sum2 += v;
})

console.log(sum2)