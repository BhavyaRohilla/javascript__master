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
//////////////////////////////////////////////////////////////////////
/*

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

console.log(bhavya.lastName);
console.log(bhavya["lastName"]);

const nameKey = "Name";
console.log(bhavya["first" + nameKey]);
console.log(bhavya["last" + nameKey]);
// console.log(bhavya.'last' + nameKey);

const intrestedIn = prompt(
  "what do you want to know about bhavya? Choose between firstName, lastName, age, job, and friends"
);

if (bhavya[intrestedIn]) {
  console.log(bhavya[intrestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

bhavya.location = "Sirsa";
bhavya["linkedin"] = "@bhavyarohilla";
console.log(bhavya);

// Challenge
// "Bhavya has 3 friends, and his best friend is called micheal"

console.log(
  `${bhavya.firstName} has ${bhavya.friends.length} friends, and his best friend is called ${bhavya.friends[0]}`
);
*/

//////////////////////////////////////////////////////////////

/*

const bhavya = {
  firstName: "Bhavya",
  lastName: "Rohilla",
  birthYear: 2001,
  job: "Teacher",
  friends: ["Micheal", "peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(bhavya.getSummary());

// console.log(bhavya.age);
// Challenge
//"Bhavya is a 22-year old teacher, and he has a driver's license"

// console.log(bhavya.calcAge(1991));
// console.log(bhavya["calcAge"](1992));

console.log(bhavya.calcAge());

console.log(bhavya.age);
console.log(bhavya.age);
console.log(bhavya.age);

*/

///////////////////////////////////////////////////////////////////////////////
/*
// console.log("Lifting weight repetition 1 🏋️");
// console.log("Lifting weight repetition 2 🏋️");
// console.log("Lifting weight repetition 3 🏋️");
// console.log("Lifting weight repetition 4 🏋️");
// console.log("Lifting weight repetition 5 🏋️");
// console.log("Lifting weight repetition 6 🏋️");
// console.log("Lifting weight repetition 7 🏋️");
// console.log("Lifting weight repetition 8 🏋️");
// console.log("Lifting weight repetition 9 🏋️");
// console.log("Lifting weight repetition 10 🏋️");

// for loop keeps running while consition is true.
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋️`);
}

const bhavyaArray = [
  "Bhavya",
  "Rohilla",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < bhavyaArray.length; i++) {
  // Reading from bhavya array
  console.log(bhavyaArray[i], typeof bhavyaArray[i]);

  // Filling types array
  // types[i] = typeof bhavyaArray[i];
  types.push(typeof bhavyaArray[i]);
}

console.log(types);

const years = [1991, 2001, 2002, 2003, 2004];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < bhavyaArray.length; i++) {
  if (typeof bhavyaArray[i] !== "string") continue;
  console.log(i);
  console.log(bhavyaArray[i], typeof bhavyaArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < bhavyaArray.length; i++) {
  if (typeof bhavyaArray[i] === "number") break;

  console.log(bhavyaArray[i], typeof bhavyaArray[i]);
}
*/

const bhavya = [
  "bhavya",
  "Rohilla",
  2024 - 2001,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

for (let i = bhavya.length - 1; i >= 0; i--) {
  console.log(i, bhavya[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repetition ${rep}🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end....");
}
