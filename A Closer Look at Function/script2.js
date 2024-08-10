"use strict";
/*
// Function returning Function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
// console.log(greeterHey)
greeterHey("Bhavya");
greeterHey("Steven");

greet("Hello")("Bhavya");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("Bhavya");
*/

/*
/////////////////////////////////////////////////////
// The Call And Apply Method And Bind

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Bhavya Rohilla");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, "Sarah William");

book.call(eurowings, 23, "Sarah William");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// Apply method
const flighData = [583, "George Cooper"];
book.apply(swiss, flighData);
console.log(swiss);

book.call(swiss, ...flighData);

// Bind Method
// book.call(eurowings, 23, "Sarah William");

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven William");

const bookEW23 = book.bind(eurowings, 12345);
// console.log(bookEW23);

bookEW23("Bhavi Kumar");
bookEW23("Bhavya Rajpoot");

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;
// console.log(addVAT);
console.log(addVAT(100));
console.log(addVAT(23));
*/

/*
// immediately invoked Function Expression (IIFE)

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will never run again"))();

{
  const isPrivate = 23;
  var norPrivate = 46;
}

// console.log(isPrivate)
console.log(norPrivate);
*/

//////////////////////////////////////////////////
// Closures

// 1.
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
console.log(booker);
booker();
booker();
booker();

console.dir(booker);
*/
/*
// 2.

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning function
h();
f();
console.dir(f);


*/
