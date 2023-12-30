import capitalize from "./capitalize";

test("capitalize - 'hello world' should be 'Hello world'", () => {
  expect(capitalize("hello world")).toMatch(/[A-Z][a-z]*/);
});
