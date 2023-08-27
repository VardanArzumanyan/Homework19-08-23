function countOccurrences(arr, num, resault = 0) {
  if (arr.length === 0) {
    return resault;
  }
  if (arr[0] === num) {
    resault++;
  }
  return countOccurrences(arr.slice(1), num, resault);
}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2];
console.log(countOccurrences(numbers, 2));
