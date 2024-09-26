'use strict';

/*
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

Person.hey = function () {
  console.log('Hey There 👋');
  console.log(this);
};

Person.hey();
// jack.hey();

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

console.dir(Person.prototype.constructor);

const arr = [0, 1, 1, 2, 3, 45, 5, 1, 2, 3, 4, 5];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// class expression
// const Personcl = class {}

// class declaration
class Personcl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Method
  // Method will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  //et a property that slready exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new Personcl('Jessica Davis', 2003);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

Personcl.hey();

const walter = new Personcl('Walter white', 1965);

console.log(jessica.__proto__ === Personcl.prototype);

// Personcl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Class are NOT hoisted
// 2. class are first-class citizen
// 3. Classes are executed in strict mode

const account = {
  owner: 'Bhavya',
  movements: [200, 8500, 600, 7000],

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

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 1991;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1989);
sarah.calcAge();
*/

/*
// Inheritance Between "Classes" : Constructor Function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

// const Students = function (firstName, birthYear, course) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.course = course;
// };

const Students = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Students.prototype = Object.create(Person.prototype);

Students.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study at ${this.course}`);
};

const mike = new Students('Mike', 2020, 'Computer Science');
mike.introduce();
*/

/*
////////////////////////////////////////////////////////////
// Inheritance Between "Classes" : ES6 Classes

class Personcl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Method
  // Method will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  //et a property that slready exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends Personcl {
  constructor(fullName, birthYear, course) {
    // Always need to be happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce = function () {
    console.log(`My name is ${this.fullName} and I study at ${this.course}`);
  };

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student i feel like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2021, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
*/

// 1) Public fields
// 2) Private fields
// 3) Public Methods
// 4) Private Methods
// (there is also the static version)
class Account {
  // 1) Public Fields (instances)
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods (instances)
  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private Methods (instances)
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Bhavya', 'Rs.', 1111, []);
// acc1._movements.push(250);
// acc1._movements.push(-150);

// acc1.deposit(250);
// acc1.withdraw(150);
// acc1.requestLoan(500);
// acc1.approveLoan(500);
// console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1.pin);

// console.log(acc1.#pin);
Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
