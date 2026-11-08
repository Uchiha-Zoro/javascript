"use strict";

// Constructor Functions and the new Operator

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

const luffy = new Person("Luffy", 1989);
const sanji = new Person("Sanji", 1991);
console.log(luffy, sanji);

console.log(luffy instanceof Person);

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};

sanji.calcAge();
zoro.calcAge();
luffy.calcAge();

console.log(zoro.__proto__);
console.log(zoro.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(zoro));
console.log(Person.prototype.isPrototypeOf(luffy));
console.log(Person.prototype.isPrototypeOf(sanji));
console.log(Person.prototype.isPrototypeOf(Person));
