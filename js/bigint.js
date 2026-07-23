"use strict";

// task 1

const bigInt1 = 1234567890123456789012345678901234567890n;
const bigInt2 = BigInt("1234567890123456789012345678901234567890");

console.log("BigInt 1:", bigInt1);
console.log("BigInt 2:", bigInt2);

console.log(typeof bigInt1); // "bigint"
console.log(typeof bigInt2); // "bigint"

// task 2

// BigInt відрізняється від Number тим, що він може представляти дуже великі цілі числа без втрати точності.

console.log(BigInt(Number.MAX_SAFE_INTEGER));

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 1n);

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 3n);

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 4n);

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 5n);

// task 3

const a = 10n;
const b = 10;

// BigInt і Number не є однаковими типами даних, тому порівняння з використанням === повертає false,
// тоді як порівняння з використанням == повертає true тому що вони мають однакове значення, але різні типи.

console.log(a === b); // false

console.log(a == b); // true

console.log(typeof a); // "bigint"

console.log(typeof b); // "number"

// task 4

// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions at bigint.js:48:17
// BigInt і Number не можна змішувати без явного перетворення типів.

// console.log(10n + 5);
