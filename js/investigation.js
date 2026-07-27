"use strict";

// 1
console.log("1.", typeof 42);

// 2
console.log("2.", typeof 42n);

// 3
console.log("3.", typeof "hello");

// 4
console.log("4.", typeof true);

// 5
console.log("5.", typeof undefined);

// 6
console.log("6.", typeof null);

// 7
console.log("7.", typeof NaN);

// 8
console.log("8.", typeof Infinity);

// 9
console.log("9.", typeof Symbol("id"));

// 10
console.log("10.", typeof {});

// 11
console.log("11.", typeof []);

// 12
console.log("12.", typeof [1, 2, 3]);

// 13
console.log("13.", typeof function () {});

// 14
console.log("14.", typeof (() => {}));

// 15
console.log("15.", typeof (2 + 2));

// 16
console.log("16.", typeof ("2" + 2));

// 17
console.log("17.", typeof ("foo" - "bar"));

// 18
let x;
console.log("18.", typeof x);

// 19
console.log("19.", typeof nonExistentVariable);

// 20
console.log("20.", typeof typeof 42);

// Завдання 4

function isReallyArray(value) {
  return Array.isArray(value);
}

console.log(isReallyArray([1, 2, 3]));
console.log(isReallyArray("hello"));
console.log(isReallyArray({ length: 3 }));
console.log(isReallyArray(null));
console.log(isReallyArray("123".split("")));

// Завдання 5

function whatIsIt(value) {
  if (value === null) {
    return "null";
  }

  if (Array.isArray(value)) {
    return "array";
  }

  return typeof value;
}

console.log(whatIsIt(42));
console.log(whatIsIt("hi"));
console.log(whatIsIt(null));
console.log(whatIsIt([1, 2]));
console.log(whatIsIt({}));
console.log(whatIsIt(() => {}));
console.log(whatIsIt(undefined));
console.log(whatIsIt(NaN));
