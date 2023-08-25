function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoize(fib) {
  let cache = new Map();
  return function (arg) {
    if (cache.has(arg)) {
      return `${cache.get(arg)} (cached)`;
    }
    let value = fib(arg);
    cache.set(arg, value);
    return `${value} (calculated)`;
  };
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
