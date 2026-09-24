"use strict";

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// task 1
const positiveNumbers = arr.filter((num) => num > 0);
const positiveSum = positiveNumbers.reduce((sum, num) => sum + num, 0);

console.log("Сума:", positiveSum);
console.log("Кількість:", positiveNumbers.length);

// task 2
const min = Math.min(...arr);
const minIndex = arr.indexOf(min);

console.log("Мінімальний:", min);
console.log("Індекс:", minIndex);

// task 3
const max = Math.max(...arr);
const maxIndex = arr.indexOf(max);

console.log("Максимальний:", max);
console.log("Індекс:", maxIndex);

// task 4
const negativeNumbers = arr.filter((num) => num < 0);

console.log("Кількість від'ємних:", negativeNumbers.length);

// task 5
const oddPositiveNumbers = arr.filter((num) => num > 0 && num % 2 !== 0);

console.log("Кількість непарних позитивних:", oddPositiveNumbers.length);

// task 6
const evenPositiveNumbers = arr.filter((num) => num > 0 && num % 2 === 0);

console.log("Кількість парних позитивних:", evenPositiveNumbers.length);

// task 7
const sumEvenPositive = evenPositiveNumbers.reduce((sum, num) => sum + num, 0);

console.log("Сума парних позитивних:", sumEvenPositive);

// task 8
const sumOddPositive = oddPositiveNumbers.reduce((sum, num) => sum + num, 0);

console.log("Сума непарних позитивних:", sumOddPositive);

// task 9
const productPositive = positiveNumbers.reduce(
  (product, num) => product * num,
  1,
);

console.log("Добуток позитивних:", productPositive);

// task 10
const maxPositive = Math.max(...positiveNumbers);
const maxPositiveIndex = arr.indexOf(maxPositive);

for (let i = 0; i < arr.length; i++) {
  if (i !== maxPositiveIndex) {
    arr[i] = 0;
  }
}

console.log(arr);
