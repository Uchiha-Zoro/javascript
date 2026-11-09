"use strict";

// Constructor Functions and the new Operator
/*
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

Person.hey = function () {
  console.log("Hey there 👋");
  console.log(this);
};

Person.hey();
// zoro.hey();
*/

// Prototypes
/*
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
*/

// Prototypal Inheritance on Build in Objects
/*
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

// Classes
/*
// Class expression
// const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Method
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2030 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2030 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}

const naruto = new PersonCl("Naruto Uzumaki", 1990);
console.log(naruto);
console.log(naruto.age);

naruto.calcAge();

console.log(naruto.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

naruto.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// const sanji = new PersonCl("Sanji", 1991);
const sasuke = new PersonCl("Sasuke Uchiha", 1991);

PersonCl.hey();
*/

// Setters and Getters
/*
const account = {
  owner: "Zoro",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

// Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2031 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const itachi = Object.create(PersonProto);
console.log(itachi);
itachi.name = "Itachi";
itachi.birthYear = 1980;
itachi.calcAge();

const minato = Object.create(PersonProto);
minato.init("Minato", 1950);
minato.calcAge();
console.log(minato);
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

// My solution
/*
// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
  console.log(`${this.speed + 10} km/h`);
};

// 3.
Car.prototype.brake = function () {
  console.log(`${this.speed - 5} km/h`);
};

// 4.
const bmw = new Car("BMW", 100);
const mercedes = new Car("Mercedes", 100);

bmw.accelerate();
mercedes.brake();
*/

// My Teacher's Solution
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.brake();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
mercedes.brake();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// My Solution
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    console.log(`${this.make} is going at ${this.speed / 1.6} mi/h`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car("Ford", 120);

ford.speedUS;
ford.speedUS = 50;
console.log(ford);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
*/

// My Teacher's Solution
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

// Inheritance between "Classes" : constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const anya = new Student("Anya", 2008, "Information Technology");

anya.introduce();
