"use strict";

// Scoping
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      const firstName = "Zoro";

      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Vansh";
calcAge(1991);

// console.log(age);
// printAge();
*/

// Hoisting and The TDZ

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Zoro";
let job = "Swordsman";
const year = 1990;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
console.log(addExpr1);
console.log(addArrow1);
// console.log(addExpr1(2, 3));
// console.log(addArrow1(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addExpr1 = function (a, b) {
  return a + b;
};

var addArrow1 = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart(); // undefined is a falsy value

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
