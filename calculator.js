const isValidArguments = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  } else {
    return true;
  }
};

const add = function (a, b) {
  if (isValidArguments(a, b)) {
    return a + b;
  }
  return "At least one argument is not a number";
};

const substract = function (a, b) {
  if (isValidArguments(a, b)) {
    return a - b;
  }
  return "At least one argument is not a number";
};

const multiply = function (a, b) {
  if (isValidArguments(a, b)) {
    return a * b;
  }
  return "At least one argument is not a number";
};

const divide = function (a, b) {
  if (isValidArguments(a, b)) {
    return a / b;
  }
  return "At least one argument is not a number";
};

const calculator = {
  add,
  substract,
  divide,
  multiply,
};

export default calculator;
