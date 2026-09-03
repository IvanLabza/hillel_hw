"use strict";

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// task 1

const positiveNumbers = arr.filter((num) => num > 0);
const positiveSum = positiveNumbers.reduce((sum, num) => sum + num, 0);
console.log(positiveNumbers, positiveSum);

// task 2

const minPositive = Math.min(...positiveNumbers);
const minPositiveIndex = arr.indexOf(minPositive);
console.log(minPositive, minPositiveIndex);

// task 3

const maxNegative = Math.max(...arr.filter((num) => num < 0));
const maxNegativeIndex = arr.indexOf(maxNegative);
console.log(maxNegative, maxNegativeIndex);

// task 4

const negativeNumbers = arr.filter((num) => num < 0);
console.log(negativeNumbers);

// task 5

const oddPositiveNumbers = arr.filter((num) => num > 0 && num % 2 !== 0);
console.log(oddPositiveNumbers);

// task 6

const evenPositiveNumbers = arr.filter((num) => num > 0 && num % 2 === 0);
console.log(evenPositiveNumbers);

// task 7

const sumEvenPositive = evenPositiveNumbers.reduce((sum, num) => sum + num, 0);
console.log(sumEvenPositive);

// task 8

const sumOddPositive = oddPositiveNumbers.reduce((sum, num) => sum + num, 0);
console.log(sumOddPositive);

//task 9

const productPositive = positiveNumbers.reduce(
  (product, num) => product * num,
  1,
);
console.log(productPositive);

// task 10

const maxPositive = Math.max(...positiveNumbers);
const maxIndex = arr.indexOf(maxPositive);

for (let i = 0; i < arr.length; i++) {
  if (i !== maxIndex) {
    arr[i] = 0;
  }
}

console.log(arr);
