"use strict";

const email = "example@example.com";

const password = "password123";

const isEmailVerified = false;

const canLogin = email.length > 0 && password.length > 0 && isEmailVerified;

console.log(canLogin ? "Логін успішний" : "Перевірте дані");
