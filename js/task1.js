"use strict";

const input = prompt("Введіть ваш вік");

if (
  input === null ||
  input.trim() === "" ||
  !Number.isFinite(Number(input)) ||
  !Number.isInteger(Number(input))
) {
  alert("Введіть коректний вік");
} else {
  const age = Number(input);

  // Чи може керувати авто
  const canDrive = age >= 18 ? "Може керувати авто" : "Не може керувати авто";

  console.log(canDrive);

  // Вартість квитка
  const ticket =
    age < 7
      ? "Квиток: 0 грн"
      : age <= 17 || age >= 65
        ? "Квиток: 50 грн"
        : "Квиток: 100 грн";

  console.log(ticket);

  // Категорія за віком
  if (age < 0) {
    alert("Такого віку не існує");
  } else if (age <= 6) {
    alert("Дошкільник");
  } else if (age <= 17) {
    alert("Неповнолітній");
  } else if (age <= 64) {
    alert("Дорослий");
  } else if (age > 120) {
    alert("Ви точно не бот?");
  } else {
    alert("Пенсіонер");
  }
}
