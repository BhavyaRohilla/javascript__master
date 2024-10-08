"use strict";

/*
// Topic - 1 => DEFAULT PARAMETER

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000);
*/

/*

// Topic - 2 => HOW PASSING ARGUMENT WORKS_VALUE VS REFERENCE

const flight = "LH234";
const bhavya = {
  name: "Bhavya Rohilla",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Checked IN");
  } else {
    alert("Wrong Passport");
  }
};

// checkIn(flight, bhavya);
// console.log(flight);
// console.log(bhavya);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(bhavya);
checkIn(flight, bhavya);
*/

// Topic - 3 => FIRST CLASS AND HIGHER ORDER FUNCTION

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log(`👏`);
};

document.body.addEventListener("click", high5);

["Riya", "Siya", "Priya"].forEach(high5);
