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
/*
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
*/

// 5 falsy values 0 , '' , undefined , null , NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/

// Equality Operators: == vs. ===
/*
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");
*/

// Logical Operators
// && and , || or , ! not {operators}
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy!");
}

const scoreDolphins1 = (97 + 112 + 80) / 3;
const scoreKoalas1 = (109 + 95 + 50) / 3;
console.log(scoreDolphins1, scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins1 === scoreKoalas1 &&
  scoreDolphins1 >= 100 &&
  scoreKoalas1 >= 100
) {
  console.log("Both win the trophy!🏆🏆");
} else {
  console.log("No one wins the trophy 😭");
}
*/

//The conditional (Ternary) operator

const age = 23;
// age >= 18
//   ? console.log("I would like to drive 🚗")
//   : console.log("I cannot drive 😭");

// const drive = age >= 18 ? "can drive 🚗" : "cannot drive 😭";
// console.log(drive);

console.log(`I ${age >= 18 ? "can drive 🚗" : "cannot drive 😭"} the car`);
