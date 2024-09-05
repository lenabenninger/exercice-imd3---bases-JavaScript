const exercices = require("../src/exercices");

// Exercice 1
// firstName
test("La variable firstName existe", () => {
  expect(exercices.firstName).not.toBeUndefined();
});
test("La variable firstName est une chaîne de caractère", () => {
  expect(exercices.firstName).toEqual(expect.any(String));
});

// lastName
test("La variable lastName existe", () => {
  expect(exercices.lastName).not.toBeUndefined();
});
test("La variable lastName est une chaîne de caractère", () => {
  expect(exercices.lastName).toEqual(expect.any(String));
});
// age
test("La variable age existe", () => {
  expect(exercices.age).not.toBeUndefined();
});
test("La variable age est un nombre", () => {
  expect(exercices.age).toEqual(expect.any(Number));
});
// city
test("La variable city existe", () => {
  expect(exercices.city).not.toBeUndefined();
});
test("La variable city est une chaîne de caractère", () => {
  expect(exercices.city).toEqual(expect.any(String));
});

// Exercice 2
if (typeof exercices.birthday() == "function") {
  const birthdayFunc = exercices.birthday();
  test("La fonction birthday() existe", () => {
    expect(birthdayFunc).not.toBeUndefined();
  });
  test("La fonction birthday() retourne un nombre", () => {
    expect(birthdayFunc).toEqual(expect.any(Number));
  });
  test("La fonction birthday() incrémente l'âge de 1", () => {
    expect(birthdayFunc).toEqual(exercices.age + 1);
    expect(exercices.birthday()).toEqual(exercices.age + 2);
  });
}

// Exercice 3
test("La fonction changeCity('Zürich') existe", () => {
  expect(exercices.changeCity("Zürich")).not.toBeUndefined();
});
test("La fonction changeCity('Zürich') retourne une chaîne de caractère", () => {
  expect(exercices.changeCity("Zürich")).toEqual(expect.any(String));
});
test('La fonction changeCity("Zürich") retourne "Zürich"', () => {
  expect(exercices.changeCity("Zürich")).toEqual("Zürich");
});
test('La fonction changeCity("Lausanne") retourne "Lausanne"', () => {
  expect(exercices.changeCity("Lausanne")).toEqual("Lausanne");
});

// Exercice 4
test("La fonction fullName() existe", () => {
  expect(exercices.fullName()).not.toBeUndefined();
});
test("La fonction fullName() retourne une chaîne de caractère", () => {
  expect(exercices.fullName()).toEqual(expect.any(String));
});
test("La fonction fullName() retourne le nom complet", () => {
  expect(exercices.fullName()).toEqual(
    exercices.firstName + " " + exercices.lastName
  );
});
