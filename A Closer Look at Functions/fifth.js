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
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(23, "Sukuna");

book.call(eurowings, 23, "Sukuna");
console.log(eurowings);

book.call(lufthansa, 239, "Toji Zenin");
console.log(lufthansa);
