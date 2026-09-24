"use strict";

// CALL

const myCall = (fn, obj, ...args) => {
  obj.temp = fn;
  const result = obj.temp(...args);
  delete obj.temp;

  return result;
};

// APPLY

const myApply = (fn, obj, args) => {
  obj.temp = fn;
  const result = obj.temp(...args);
  delete obj.temp;

  return result;
};

// BIND

const myBind = (fn, obj, ...args) => {
  return (...newArgs) => {
    return myApply(fn, obj, [...args, ...newArgs]);
  };
};

// ПРИКЛАД

const greet = function (age, city) {
  return `${this.name}, ${age}, ${city}`;
};

const user = {
  name: "Ivan",
};

console.log(myCall(greet, user, 25, "Poltava"));

console.log(myApply(greet, user, [25, "Poltava"]));

const newGreet = myBind(greet, user, 25);

console.log(newGreet("Poltava"));
