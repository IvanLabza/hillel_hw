"use strict";

console.log(describe(42)); // Тип: number, Значення: 42
console.log(describe("hello")); // Тип: string, Значення: hello
console.log(describe(true)); // Тип: boolean, Значення: true
console.log(describe(undefined)); // Тип: undefined, Значення: undefined

console.log(describe(null)); // Тип: null, Значення: null
console.log(describe([1, 2, 3])); // Тип: array, Значення: ...
console.log(describe(NaN)); // Тип: NaN, Значення: NaN
console.log(describe({ a: 1 })); // Тип: object, Значення: ...

console.log(describe("hello"));
// Тип: string, Значення: hello, Довжина: 5

console.log(describe([1, 2, 3]));
// Тип: array, Значення: 1,2,3, Кількість елементів: 3

console.log(describe({ name: "Anna", age: 25 }));
// Тип: object, Значення: {name:Anna,age:25}, Ключі: name, age

console.log(
  describe(function (a, b, c) {
    return a + b + c;
  }),
);
// Тип: function, Значення: <function>, Аргументів: 3

console.log(describe(100n));
// Тип: bigint, Значення: 100n

console.log(describe(Symbol("user-id")));
// Тип: symbol, Значення: user-id

console.log(describe(Symbol()));
// Тип: symbol, Значення: без опису

const testValues = [
  42,
  0.1 + 0.2,
  100n,
  "hello",
  "",
  true,
  false,
  null,
  undefined,
  NaN,
  Infinity,
  [1, 2, 3],
  [],
  { name: "Anna", age: 25 },
  {},
  Symbol("id"),
  function greet(name) {
    return `Hi, ${name}`;
  },
  () => "arrow",
  // додайте ще щось на свій розсуд
];

for (let i = 0; i < testValues.length; i++) {
  console.log(describe(testValues[i]));
}

console.log(describe({ name: "Anna", hobbies: ["sewing", "F1"], age: 25 }));

