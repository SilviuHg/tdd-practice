import caesarCipher from "./caesarCipher";

test("'aabbccdd' should be 'bbccddee'", () => {
  expect(caesarCipher("aabbccdd", 1)).toMatch("bbccddee");
});

test("'aAbBcCzZ' should be 'bBcCdDaA'", () => {
  expect(caesarCipher("aAbBcCzZ", 1)).toMatch("bBcCdDaA");
});

test("'a1ab#bc c' becomes 'b1bc#cd d'", () => {
  expect(caesarCipher("a1ab#bc c", 1)).toMatch("b1bc#cd d");
});
