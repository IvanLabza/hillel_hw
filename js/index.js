"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myShift = (arr) => {
  const firstElement = arr[0];
  if (arr.length === 0) {
    return undefined;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return firstElement;
  }
};

console.log(myShift(arr));

const myReverse = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};

console.log(myReverse(arr));
