const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }
  return false;
};

const isLowerCase = (char) => {
  if (char == char.toLowerCase() && char != char.toUpperCase()) {
    return true;
  }
  return false;
};

function shiftCipher(key) {
  let cipherAlphabet = [...alphabet];
  for (let i = 0; i < key; i++) {
    let letter = cipherAlphabet.shift();
    cipherAlphabet.push(letter);
  }
  return cipherAlphabet;
}

function caesarCipher(string, key) {
  let finalString = "";
  let cipher = shiftCipher(key); // shift the alphabet
  let arrayFromOriginalString = string.split("");
  for (let i = 0; i < arrayFromOriginalString.length; i++) {
    let originalCharacter = arrayFromOriginalString[i]; // get the character from the string
    let originalPosition = alphabet.indexOf(originalCharacter.toLowerCase()); // get the character's index

    // check if the character is a letter
    if (originalPosition !== -1) {
      let replacedLetter = cipher[originalPosition];

      if (isUpperCase(originalCharacter)) {
        replacedLetter = replacedLetter.toUpperCase();
      } else if (isLowerCase(originalCharacter)) {
        replacedLetter = replacedLetter.toLowerCase();
      }
      finalString += replacedLetter;
    } else {
      finalString += originalCharacter; // keep non-alphabetic characters
    }
  }

  return finalString;
}

export default caesarCipher;
