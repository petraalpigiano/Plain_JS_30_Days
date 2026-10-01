const passLength = 3;

function generatePassword(passLength) {
  // data
  let randomPass = "";
  const characters = {
    minuscole: ["a", "c", "d"],
    maiuscole: ["F", "H", "I"],
    numeri: [2, 6, 7],
    simboli: ["@", "°", "*"],
  };
  const allCharacters = [];
  // base length validation
  if (passLength < 4) {
    throw new Error(
      "La password deve avere almeno 4 caratteri: 1 minuscola, 1 maiuscola, 1 numero e 1 simbolo",
    );
  }

  // get a random character from a specific array
  const getRandomCharacter = (array) => {
    const random = Math.floor(Math.random() * array.length);
    const randomCharacter = array[random];
    return randomCharacter;
  };

  // group all the character in the same array to get random characters
  for (const key in characters) {
    const currentArray = characters[key];
    for (const currentElement of currentArray) {
      allCharacters.push(currentElement);
    }
  }

  // add the fixed character and the others to the password
  randomPass += getRandomCharacter(characters.minuscole);
  randomPass += getRandomCharacter(characters.maiuscole);
  randomPass += getRandomCharacter(characters.numeri);
  randomPass += getRandomCharacter(characters.simboli);

  for (let i = 0; i < passLength - 4; i++) {
    randomPass += getRandomCharacter(allCharacters);
  }

  // shuffle of password characters for better security
  const randomPassArray = randomPass.split("");
  // console.log(randomPassArray);

  for (let i = 0; i < randomPassArray.length; i++) {
    const j = Math.floor(Math.random() * randomPassArray.length);
    const temp = randomPassArray[i];
    randomPassArray[i] = randomPassArray[j];
    randomPassArray[j] = temp;
  }
  // transform the array back in a string, and we got the final password
  randomPass = randomPassArray.join("");
  return randomPass;
}

console.log(generatePassword(passLength));
