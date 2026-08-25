// Use of Strict Mode
/*
// "use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //without strict mode we would not be able to find this bug as hasDriversLicense is not written correctly
if (hasDriversLicense) console.log("I can Drive :D");

const interface = "Audio"; //this will also not execute because interface it a reserved keyword even though it will not give error without strictmode
*/

//Function
/*
function logger() {
  console.log("My name is Roronoa Zoro");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const fruitJuice = fruitProcessor(3, 2);
console.log(fruitJuice);

console.log(fruitProcessor(4, 5));
*/

// Function Declarations vs. Expressions
/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

//Arrow fumction
/*
const calcAge3 = (birthYear) => 2028 - birthYear;
const age3 = calcAge3(2006);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2028 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(2006));

const yearsUntilRetirementOfPerson = (birthYear, firstName, lastName) => {
  const age = 2028 - birthYear;
  const retirement = 65 - age;
  return `${firstName} ${lastName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirementOfPerson(2006, "Zoro", "Roronoa"));
*/

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
