const passLength = 10;
let randomPass = "";
characters = {
  minuscole: ["a", "c", "d"],
  maiuscole: ["F", "H", "I"],
  numeri: [2, 6, 7],
  simboli: ["@", "°", "*"],
};
allCharacters = [];

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

randomPass += getRandomCharacter(characters.minuscole);
randomPass += getRandomCharacter(characters.maiuscole);
randomPass += getRandomCharacter(characters.numeri);
randomPass += getRandomCharacter(characters.simboli);

for (let i = 0; i < passLength - 4; i++) {
  randomPass += getRandomCharacter(allCharacters);
}

console.log("La password generata è: " + randomPass);
