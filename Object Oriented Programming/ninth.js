"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const zoro = new Person("Zoro", 1990);
console.log(zoro);

// 1. New empty object {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
