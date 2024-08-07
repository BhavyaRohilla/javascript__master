"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  //   console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2000 && birthYear <= 2006) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable;
      const firstName = "Steven";

      // Reassigning outer scope's variable
      const output = "NEW OUTPUT!!!!!";
      const str = `Oh, you re lucky, ${firstName}`;
      console.log(str);
      //   console.log(output);
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

const firstName = "Bhavya";
calcAge(2001);
// console.log(age);
// printAge();
