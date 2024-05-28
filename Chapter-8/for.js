const arr = [1, 2, false, null, 3, 5, 6, '', 'string', 9, 6];

let count = 0;
for(let i = 0; i< arr.length; i++){
    for(let j = i; j < arr.length - 1; j++){
        if(!arr[j] || typeof arr[j] !== 'number'){
            arr[j] = arr[j + 1];
            arr[j + 1] = undefined;
        }
    }
    if(typeof arr[i] === 'undefined'){
        count++; 
    }
}
arr.length -= count;
console.log(arr)