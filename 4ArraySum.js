function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + arraySum(arr.splice(1));
}
console.log(arraySum([1, 2, 3, 4, 5]));
