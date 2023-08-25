function createCounter() {
  let x = 0;
  return function () {
    return ++x;
  };
}
let counter = createCounter();
console.log(counter());
console.log(counter());
