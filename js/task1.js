"use strict";

console.log(parseInt(null, 10)); // NaN
console.log(parseInt(undefined, 10)); // NaN
console.log(parseInt("", 10)); // NaN
console.log(parseInt("   ", 10)); // NaN
console.log(parseInt("42", 10)); // 42
console.log(parseInt("  42  ", 10)); // 42
console.log(parseInt("42abc", 10)); // 42
console.log(parseInt("abc42", 10)); // NaN
console.log(parseInt("3.9", 10)); // 3
console.log(parseInt("-5", 10)); // -5

console.log(Number(null)); // 0
console.log(Number("")); // 0
console.log(Number("42abc") + null); // NaN

console.log(parseInt(null, 36)); // 1112745

let guessedCorrectly = false;
const randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;
const maxAttempts = 5;

do {
  const userGuess = prompt("Вгадай число від 1 до 10:");

  // Cancel
  if (userGuess === null) {
    alert("Гру завершено");
    break;
  }

  // Порожнє поле або пробіли
  if (userGuess.trim() === "") {
    alert("Ви нічого не ввели");
    continue;
  }

  const number = Number(userGuess);

  // Не число
  if (Number.isNaN(number)) {
    alert("Це не число");
    continue;
  }

  // Дробове число
  if (!Number.isInteger(number)) {
    alert("Введіть ціле число");
    continue;
  }

  // Спроба зараховується тільки тут
  attempts++;

  // Число не від 1 до 10
  if (number < 1 || number > 10) {
    alert("Число має бути від 1 до 10");

    if (attempts === maxAttempts) {
      alert(`На жаль, це було число ${randomNumber}`);
      break;
    }

    continue;
  }

  // Вгадав
  if (number === randomNumber) {
    alert(`Вітаю! Ви вгадали число за ${attempts} спроб!`);
    guessedCorrectly = true;
    break;
  }

  // Не вгадав
  if (number < randomNumber) {
    alert(`Замало. Залишилось спроб: ${maxAttempts - attempts}`);
  } else {
    alert(`Забагато. Залишилось спроб: ${maxAttempts - attempts}`);
  }

  // Спроби закінчились
  if (attempts === maxAttempts) {
    alert(`На жаль, це було число ${randomNumber}`);
    break;
  }
} while (!guessedCorrectly);

/*
Варіант перевірки через Number():

const number = Number(userGuess);

if (Number.isNaN(number)) {
    alert("Це не число");
}
*/
