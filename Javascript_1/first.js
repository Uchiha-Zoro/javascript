// How to get Output in JS
/*
let js = "amazing";
if (js === "amazing") alert("Javascript is Fun!");

console.log(40 + 8 + 23 - 10);
*/

// Variable Declaration in JS
/*
let firstName = "Vansh"; //We can change this variable

// firstName = "Zoro"; //Like this we can change the variable

console.log(firstName);

// let PI = 3.1415;

const PI = 3.1415; //We cannot change this variable

console.log(PI);

var lastName = "Patel";

// lastName = "Roronoa";

console.log(lastName);
*/

// Operators in JS
/*
const now = 2026;

const ageVansh = now - 2006;

const ageZoro = now - 2000;

console.log(now, ageVansh, ageZoro);

console.log(ageVansh * 2, ageZoro / 10, 2 ** 3);

const firstName = "Zoro";

const lastName = "Roronoa";

console.log(firstName + " " + lastName);

console.log(ageVansh > ageZoro);

console.log(ageVansh < ageZoro);
*/

// Challenge 1 (Small Coding test)
/*
const massVansh = 59;
const heightVansh = 1.59;

const maassZoro = 65;
const heightZoro = 1.69;

const BMIVansh = massVansh / heightVansh ** 2; // Both have same logic but
const BMIZoro = (maassZoro / heightZoro) * heightZoro; // Different representation

console.log(BMIVansh, BMIZoro);

const HigherBMI = BMIVansh > BMIZoro;

if (HigherBMI === true) {
  console.log("Body Mass Index of Vansh is greater than Zoro");
} else {
  console.log("Body Mass Index of Zoro is greater than Vansh");
}
*/

//String and Template Literal
/*
const firstName = "Zoro";
const lastName = "Roronoa";
const role = "Swordsman";
const crewName = "Straw Hat";
const positionInCrew = "The Right Hand of Captain";

// string Form
const info =
  "I'm " +
  firstName +
  " " +
  lastName +
  " , the " +
  role +
  " of " +
  crewName +
  " and " +
  positionInCrew;

console.log(info);

//Template Literal(Easier than string and also more efficient for this type of task only)
const infoNew = `I'm ${firstName} ${lastName} , the ${role} of ${crewName} and ${positionInCrew}`;

console.log(infoNew);
*/

// Challenge 2
/*
const massVansh = 59;
const heightVansh = 1.59;

const maassZoro = 65;
const heightZoro = 1.69;

const BMIVansh = massVansh / heightVansh ** 2; // Both have same logic but
const BMIZoro = (maassZoro / heightZoro) * heightZoro; // Different representation

console.log(BMIVansh, BMIZoro);

if (BMIVansh > BMIZoro) {
  console.log(
    `Body Mass Index Of Vansh (${BMIVansh}) is greater than Zoro (${BMIZoro})`,
  );
} else {
  console.log(
    `Body Mass Index Of Zoro (${BMIZoro}) is greater than Vansh (${BMIVansh})`,
  );
}
*/

// Type Conversion and Coercion

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // '11'  // + operator if we have one string it will convert the type of another value to string also
n = n - 1; // - operator convert the string type to number type
console.log(n);
