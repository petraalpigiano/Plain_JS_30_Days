const passLength = 10;
let randomPass = "";
characters = {
  minuscole: ["a", "c", "d"],
  maiuscole: ["F", "H", "I"],
  numeri: [2, 6, 7],
  simboli: ["@", "°", "*"],
};

// console.log(characters.minuscole);
const getRandomCharacter = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomCharacter = array[randomIndex];
  return randomCharacter;
};

console.log(getRandomCharacter(characters.minuscole));
