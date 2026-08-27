"use strict";

const padString = (array, arrayLength, char, charPosition = true) => {
  if (typeof array !== "string") {
    return "Error: first argument must be a string";
  }

  if (typeof arrayLength !== "number") {
    return "Error: second argument must be a number";
  }

  if (typeof char !== "string" || char.length !== 1) {
    return "Error: third argument must be a single character";
  }

  if (typeof charPosition !== "boolean") {
    return "Error: fourth argument must be a boolean";
  }

  const length = array.length;
  let message = "";
  if (length < arrayLength) {
    const padLength = arrayLength - length;
    const padString = char.repeat(padLength);

    message = charPosition ? padString + array : array + padString;
  } else {
    message = array.substring(0, arrayLength);
  }
  return message;
};

console.log(padString(3, 8, "-", false));

console.log(padString("hello", 4, "-"));
