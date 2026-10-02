import generatePassword from "./for_test_generator";

test("la lunghezza della password deve essere di n caratteri", () => {
  expect(generatePassword(20)).toHaveLength(20);
});
test("contiene almeno una lettera minuscola, una maiuscola, un simbolo, un numero", () => {
  const password = generatePassword(20);
  expect(password).toMatch(/[a-z]/);
  expect(password).toMatch(/[A-Z]/);
  expect(password).toMatch(/[0-9]/);
  expect(password).toMatch(/[@°*]/);
});
// test() -> descrive una caratteristica/comportamento che vuoi verificare
// expect() → verifica una singola condizione all'interno di quel comportamento.
// [...] in una RegularExpression -> significa un insieme di caratteri tra cui cercare un singolo carattere.
