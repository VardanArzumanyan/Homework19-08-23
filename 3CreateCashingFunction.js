function createCachingFunction() {
  let obj = {};
  return function (x) {
    if (x in obj) {
      return `${obj[x]} (cached)`;
    }
    obj[x] = x * 2;
    return `${obj[x]} (calculated)`;
  };
}
const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
