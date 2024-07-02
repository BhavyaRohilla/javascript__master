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
