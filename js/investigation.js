"use strict";

let name;
console.log(name);

// let name = null;
// console.log(name);

function greet(user) {
  console.log("Hello,", user);
}
greet();

function calculate(a, b) {
  return a + b;
  // забули повернути результат окремої змінної
}
console.log(calculate(2, 3));

function calculate(a, b) {
  let result = a + b;
  // не написали return
}
console.log(calculate(2, 3));

function calculate(a, b) {
  return;
}
console.log(calculate(2, 3));

const user = {
  firstName: "John",
  lastName: "Doe",
};
console.log(user.age);

const arr = [10, 20, 30];
console.log(arr[10]);

// const user = {
//   firstName: "John",
//   middleName: null, // розробник свідомо сказав, що середнього імені немає
//   lastName: "Doe",
// };
// console.log(user.middleName);

//test 3

function describeEmpty(value) {
  if (value === undefined) {
    return "Це undefined — JavaScript сам поставив або значення не задано";
  }

  if (value === null) {
    return "Це null — розробник свідомо сказав, що тут порожньо";
  }

  return `Це не є порожнім значенням: ${typeof value}, ${value}`;
}

console.log(describeEmpty(null));
console.log(describeEmpty(undefined));
console.log(describeEmpty(0));
console.log(describeEmpty(""));
console.log(describeEmpty([]));
console.log(describeEmpty(false));

//test 4

let userName = "Anna";
let userAge = 18;

console.log("name:", userName);

function getGreeting(name) {
  return `Hello, ${name}`;
}

const message = getGreeting("World");
console.log("message:", message);

//test 5

const user1 = {
  name: "Anna",
  contact: {
    email: "anna@example.com",
  },
};

const user2 = {
  name: "Bob",
};

console.log(user1.contact?.email);
console.log(user2.contact?.email);
