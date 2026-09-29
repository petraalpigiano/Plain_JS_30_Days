const characters = ["a", "b", "C", "F", "8", "3", "@", "*", "9", "°"];
const passLength = 10;
let randomPass = "";

for (let i = 0; i < passLength; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  //   console.log(randomIndex);
  const randomCharacter = characters[randomIndex];
  //   console.log(randomCharacter);
  randomPass += randomCharacter;
}
console.log(randomPass);
