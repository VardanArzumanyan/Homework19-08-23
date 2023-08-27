function subsetSum(arr, num) {
  if (arr.length === 1) {
    return false;
  }
  if (arr[0] + arr[1] === num) {
    return true;
  }
  return subsetSum(arr.slice(1), num);
}

const inputArray = [2, 4, 6, 8];
console.log(subsetSum(inputArray, 10));
