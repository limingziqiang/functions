const array = [1, 2, 3, 1, 2, 3, 4, 5];
// const uniqueArray = Array.from(new Map(array.map(item => [item, item])).values());

// console.log(uniqueArray); // [1, 2, 3, 4, 5]


const uniqueArray = Array.from(new Map(array.map(item=>[item,item])).values());
console.log(uniqueArray)
