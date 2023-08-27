function flattenArray(arr) {
  let arr1 = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      arr1 = arr1.concat(flattenArray(i));
    } else {
      arr1.push(i);
    }
  }
  return arr1;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray));
