'use strict';

const Person = function (firstName, birthYear) {
  //   console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   never do this
  //   this.calcAge = function () {
  //     return 2024 - this.birthYear;
  //   };
};

const bhavya = new Person('Bhavya', 2001);
console.log(bhavya);
// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2003);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(bhavya instanceof Person);

// Prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

console.log(bhavya.calcAge());
console.log(matilda.calcAge());

console.log(bhavya.__proto__);

console.log(bhavya.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(bhavya));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(bhavya.species, matilda.species);

console.log(bhavya.hasOwnProperty('firstName'));
console.log(bhavya.hasOwnProperty('species'));

console.log(bhavya.__proto__);
// Object.prototype. (top of the prototype chain)
console.log(bhavya.__proto__.__proto__);
console.log(bhavya.__proto__.__proto__.__proto__);
