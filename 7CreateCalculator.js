function createCalculator(str) {
  return function (num1, num2) {
    switch (str) {
      case "add":
        return num1 + num2;
      case "multiply":
        return num1 * num2;
      default:
        return "Incorrect action";
    }
  };
}

const add = createCalculator("add");
console.log(add(3, 5));

const multiply = createCalculator("multiply");
console.log(multiply(2, 4));
