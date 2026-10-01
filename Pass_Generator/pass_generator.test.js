import generatePassword from "./for_test_generator";

test("la lunghezza della password deve essere di 20 caratteri", () => {
  expect(generatePassword(29)).toHaveLength(20);
});
