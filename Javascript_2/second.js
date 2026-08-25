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

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
