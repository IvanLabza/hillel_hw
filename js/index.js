"use strict";

// 1
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

// 2

const priceDolar = 27; // пустив тут сльозу, відсилку зрозумів :(

for (let i = 10; i <= 100; i += 10) {
  console.log(i * priceDolar);
}

// 3

const N1 = Number(prompt("Введіть число:"));

for (let i = 1; i <= 100 && i * i <= N1; i++) {
  console.log(i);
}

// 4

const N2 = Number(prompt("Введіть число:"));
let prime = N2 > 1;

for (let i = 2; i < N2; i++) {
  if (N2 % i === 0) prime = false;
}

console.log(prime ? "Просте" : "Не просте");

// 5

const N3 = Number(prompt("Введіть число:"));
let number = N3;

while (number > 1 && number % 3 === 0) {
  number /= 3;
}

console.log(number === 1 ? "Так" : "Ні");
