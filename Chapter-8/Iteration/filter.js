const arr = [1, 2, false, null, 3, 5, 6, '', 'string', 9, 6];

const arr2 = arr.filter (value => typeof value === 'number')
console.log(arr2)