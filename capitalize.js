// takes a string and returns it with the first character capitalized
function capitalize(string) {
  const arr = string.split("");
  const firstChar = arr[0].toUpperCase();
  arr[0] = firstChar;
  let capitalizedString = arr.join("");
  return capitalizedString;
}

export default capitalize;
