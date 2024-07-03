"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

function logger() {
  console.log("My name is bhavya");
}

// Calling / runnig / invoking function
logger();
logger();
logger();

function cutFruitPeices(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePeices = cutFruitPeices(apples);
  const orangePeices = cutFruitPeices(oranges);

  const juice = `Juice with ${applePeices} Pieces of apples and ${orangePeices} Pieces oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

*/
////////////////////////////////////////////
/*
// function declaration
console.log(calcAge1(2005));

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
// console.log(calcAge2(1256));

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
////////////////////////////////////////////////

// Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return retirement;
  //   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Bhavya"));
console.log(yearsUntilRetirement(1960, "Bob"));
*/
/////////////////////////////////////////
/*
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2024);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[3]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['bob','alice'];

const firstName = "Bhavya";
const Bhavya = [firstName, "Rohilla", 2024 - 2001, "teacher", friends];
console.log(Bhavya);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const year = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(year));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

//Add elements
const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//remove elements
// friends.pop();
const popped = friends.pop(); // last
console.log(popped);
console.log(friends);

console.log(friends.shift()); // first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called steven");
}

const bhavyaArray = [
  "Bhavya",
  "Rohilla",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

console.log(bhavyaArray);

const bhavya = {
  firstName: "Bhavya",
  lastName: "Rohilla",
  age: 2024 - 2001,
  job: "Teacher",
  friends: ["Micheal", "peter", "Steven"],
};

console.log(bhavya);
