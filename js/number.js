"use strict";

// task 1

console.log("Ціле число:", 42);

console.log("Ціле від'ємне число:", -42);

console.log("Дробне число:", 42.5);

console.log("Ціле число в експоненціальному форматі:", 42e3);

console.log("Ціле від'ємне число в експоненціальному форматі:", 42e-3);

console.log("Ціле число з роздільниками:", 42_000_000);

// task 2

console.log(10 / 0);

console.log(-10 / 0);

console.log(0 / "abc");

// task 3

// 0.30000000000000004 особливість роботи з числами з плаваючою комою в JavaScript.
// Це пов'язано з тим, що деякі десяткові дроби не можуть бути точно представлені у
// двійковій системі числення, яка використовується для зберігання чисел у комп'ютерах.
// В результаті виникають невеликі похибки при обчисленнях.

console.log(0.1 + 0.2);

// task 4

// Number.MAX_SAFE_INTEGER - це найбільше ціле число, яке може бути точно представлене у JavaScript без втрати точності.

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER + 1);

console.log(Number.MAX_SAFE_INTEGER + 2);

console.log(Number.MAX_SAFE_INTEGER + 3);

console.log(Number.MAX_SAFE_INTEGER + 4);

console.log(Number.MAX_SAFE_INTEGER + 5);

// task 5

// NaN (Not-a-Number) - це спеціальне значення, яке використовується для позначення результату операцій,
// які не можуть бути представлені як дійсне число. 
// Наприклад, ділення нуля на нуль або обчислення квадратного кореня з від'ємного числа.

console.log(NaN + 1);

console.log(NaN - 1);

console.log(NaN * 1);

console.log(NaN / 1);
