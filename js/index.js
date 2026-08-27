"use strict";

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (arr, element) => {
  const index = arr.indexOf(element);
  if (index !== -1) {
    arr.splice(index, 1);
  }
};

removeElement(array, 3);
console.log(array);
// Результат: [1, 2, 4, 5, 6, 7]
