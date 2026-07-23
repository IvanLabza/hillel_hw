"use strict";

// 1 Task

// const, тому що ім'я не буде змінюватися
const firstName = "Ivan";
console.log(firstName);

// const, тому що прізвище є постійним
const lastName = "Labza";
console.log(lastName);

// let, тому що вік з часом змінюється
let age = 22;
console.log(age);

// let, тому що місце проживання може змінитися
let city = "Poltava";
console.log(city);

// const, тому що хобі задається як незмінне значення
const hobby = "gaming";
console.log(hobby);

// const, тому що рік народження ніколи не змінюється
const birthYear = 2004;
console.log(birthYear);

// const, тому що улюблений колір задається як постійне значення
const favoriteColor = "black";
console.log(favoriteColor);

// 2 Task

// вік через рік

console.log(age + 1);

// Uncaught TypeError: Assignment to constant variable. at variables.js:37:24

// birthYear = 2000;

// Uncaught SyntaxError: Identifier 'firstName' has already been declared (at variables.js:43:7)

// const firstName = "Vitalii";

// 3 Task

const message = `My name is ${firstName} ${lastName}. I am ${age} years old. I live in ${city}. My hobby is ${hobby}. I was born in ${birthYear}. My favorite color is ${favoriteColor}.`;
console.log(message);
