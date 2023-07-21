function intersection(...arrays) {
  return arrays.reduce((acc, cur) => acc.filter(item => cur.includes(item)));
}

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const arr3 = [3, 4, 5, 6];

const result = intersection(arr1, arr2, arr3);
console.log(result); // 输出 [3, 4]
