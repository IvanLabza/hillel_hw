"use strict";

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let key = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    key += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return key;
}

const key = generateKey(3, characters);
console.log(key); 
