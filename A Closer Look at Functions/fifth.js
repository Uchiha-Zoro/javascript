"use strict";

//Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("HL123", 2, 800);
createBooking("AB123", 2);
createBooking("BA123", 5);

createBooking("AC123", undefined, 1000);
*/

//How passing arguments works values vs reference
/*
const flight = "LH123";
const zoro = {
  name: "Zoro Roronoa",
  passport: 23456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "Lh999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 23456789) {
    alert("Checked In");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, zoro);
// console.log(flight);
// console.log(zoro);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(zoro);
checkIn(flight, zoro);
console.log(zoro);
*/

//Functions Accepting Callback Functions
/*
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

["Luffy", "Zoro", "Sanji"].forEach(high5);
*/

//Functions returing function
/*
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}: ${name}`);
//   };
// };

const greet = (greeting) => (name) => console.log(`${greeting}: ${name}`);

const greetHey = greet("Hey");
greetHey("Zoro");
greetHey("Vansh");

greet("Hello")("Gojo");
*/

/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Gojo Satoru");
lufthansa.book(240, "Utahime Iori");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(23, "Sukuna");

// Call Method
book.call(eurowings, 23, "Sukuna");
console.log(eurowings);

book.call(lufthansa, 239, "Toji Zenin");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Giyu Tomioka");
book.call(swiss, 583, "Shinobu Kocho");

// Apply Method
const flightData = [583, "Douma Upper Moon 2"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Naruto");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Vansh Patel");

//With Event Listner
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial Application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

// Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n (Write option number)`,
      ),
    );
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
*/

//Immediately Invoked Function EXpressions

const runOnce = function () {
  console.log("I will never run agian");
};
// runOnce();

(function () {
  console.log("I will never run again");
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log("I will also never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
