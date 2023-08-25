function add(a, b, c) {
  return a + b + c;
}
function curry(fun) {
  return function curried(...args) {
    if (args.length >= fun.length) {
      return fun(...args);
    } else {
      return function (...nextargs) {
        return curried(...args, ...nextargs);
      };
    }
  };
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6
