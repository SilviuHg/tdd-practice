import reverse from "./reversedString.js";

test("reversed string", () => {
  expect(reverse("hello")).toMatch("olleh");
});
