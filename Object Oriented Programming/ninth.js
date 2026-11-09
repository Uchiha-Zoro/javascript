"use strict";

/*
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

Person.prototype.species = "Homo Sapiens";
console.log(zoro, luffy, sanji);
console.log(zoro.species);
console.log(luffy.species);
console.log(sanji.species);

console.log(zoro.hasOwnProperty("firstName"));
console.log(zoro.hasOwnProperty("species"));

// Prototypal Inheritance on Build in Objects

console.log(zoro.__proto__);
// Object.prototype ( top of prototype chain )
console.log(zoro.__proto__.__proto__);
console.log(zoro.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");

console.dir(h1);

console.dir((x) => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
