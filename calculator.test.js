import calculator from "./calculator";

test("add (1, 2) equals 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("substract (3, 2) equals 1", () => {
  expect(calculator.substract(3, 2)).toBe(1);
});

test("divide (8, 4) equals 2", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

test("multiply (4, 2) equals 8", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});
