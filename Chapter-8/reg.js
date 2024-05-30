const text = 'hablu programmer, hablu mama';
const result = text.search(/Hablu/i)
console.log(result)


const text2 = 'hablu programmer, hablu mama';
const result2 = text.match(/Hablu/ig)
console.log(result2)


const text3 = 'hablu programmer, hablu mama';
const result3 = text.replace(/Hablu/ig, 'nayem')
console.log(result3)