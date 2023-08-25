function add(a, b, c) {
  return a + b + c;
}
function partial(add, num1) {
  return function (num2, num3) {
    return add(num1, num2, num3);
  };
}

const add5 = partial(add, 5);
console.log(add5(10, 20));
