"use strict";

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2030 - this.birthYear);
  //   };
};

const zoro = new Person("Zoro", 1990);
console.log(zoro);

// 1. New empty object {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const luffy = new Person("Luffy", 1990);
const sanji = new Person("Sanji", 1990);
console.log(luffy, sanji);

console.log(luffy instanceof Person);
