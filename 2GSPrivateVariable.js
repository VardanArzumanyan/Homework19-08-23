function privateVariable(num) {
  let _num = num;
  return (obj = {
    get() {
      return _num;
    },
    set(number) {
      _num = number;
      return _num;
    },
  });
}

const secretValue = privateVariable(42);
console.log(secretValue.get()); // Output: 42
secretValue.set(100);
console.log(secretValue.get()); // Output: 100
