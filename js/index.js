"use strict";

const list = document.querySelectorAll("li");

// Вивести кожен елемент у консоль
for (const item of list) {
  console.log(item);
}

// Загальна кількість елементів
console.log("Кількість:", list.length);

// Текст кожного li в масив
const text = [];

for (const item of list) {
  text.push(item.firstChild.textContent.trim());
}

console.log(text);
