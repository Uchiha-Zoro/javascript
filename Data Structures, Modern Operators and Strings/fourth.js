"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets . But not objects
const str = "Roronoa";
const letters = [...str];
console.log(letters);
console.log(...str);
// console.log(`${...str} Zoro`);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Vinsmoke Sanji",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Baartie All Blue";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//Destructuring Objects
/*
restaurant.orderDelivery({
  time: "22:30",
  address: "one Piece the land of wano in new world",
  starterIndex: 2,
  mainIndex: 0,
});

restaurant.orderDelivery({
  address: "one Piece elbaph in new world",
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 9 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

//Destructuring Array
/*
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(a, b, c);
// console.log(x, y, z);
// console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

const [first1, , third3] = restaurant.categories;
console.log(first1, third3);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, second);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Destructuring Nested Array
const nested = [2, 3, [4, 5]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p, q, r] = [8, 9];
console.log(p, q, r);

const [m = 1, n = 1, o = 1] = [8, 9];
console.log(m, n, o);
*/
