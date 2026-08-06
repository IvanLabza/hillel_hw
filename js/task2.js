"use strict";

const celsius = Number(prompt("Введіть температуру в °C"));
const scale = prompt("Введіть шкалу (F, K або R)")?.toLowerCase();

if (!Number.isFinite(celsius)) {
  alert("Введіть коректну температуру");
} else if (celsius < -273.15) {
  alert("Нижче абсолютного нуля");
} else {
  // ---------- Рівень 1 (switch) ----------
  let result;

  switch (scale) {
    case "f":
      result = Math.round(((celsius * 9) / 5 + 32) * 100) / 100;
      break;

    case "k":
      result = Math.round((celsius + 273.15) * 100) / 100;
      break;

    case "r":
      result = Math.round((((celsius + 273.15) * 9) / 5) * 100) / 100;
      break;

    default:
      alert("Невідома шкала");
      break;
  }

  // ---------- Рівень 2 (об'єкт-мапа) ----------
  const scaleNames = {
    f: "Фаренгейт",
    k: "Кельвін",
    r: "Ранкін",
  };

  if (Object.hasOwn(scaleNames, scale)) {
    const scaleName = scaleNames[scale] ?? "Невідома шкала";

    // ---------- Рівень 3 (тернарний оператор) ----------
    const weather =
      celsius < -10
        ? "мороз"
        : celsius <= 0
          ? "холодно"
          : celsius <= 15
            ? "прохолодно"
            : celsius <= 25
              ? "комфортно"
              : "спека";

    alert(`${celsius} °C = ${result} (${scaleName}) — ${weather}`);
  } else {
    alert("Невідома шкала");
  }
}
