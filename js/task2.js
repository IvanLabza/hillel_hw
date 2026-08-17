"use strict";

//2.1. Секундомір

const secondsInput = prompt("Введіть кількість секунд:");

if (secondsInput === null || secondsInput.trim() === "") {
  console.log("Некоректний ввід");
} else {
  const seconds = Number(secondsInput);

  if (Number.isNaN(seconds) || !Number.isInteger(seconds) || seconds < 0) {
    console.log("Некоректний ввід");
  } else {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const result =
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(secs).padStart(2, "0");

    console.log(result);
  }
}

// 2.2. Сума цифр і цифровий корінь

const numberInput = prompt("Введіть ціле додатне число:");

if (numberInput === null || numberInput.trim() === "") {
  console.log("Некоректний ввід");
} else {
  const number = Number(numberInput);

  if (!Number.isInteger(number) || number <= 0) {
    console.log("Некоректний ввід");
  } else {
    let current = number;
    let sum = 0;

    // Сума цифр
    while (current > 0) {
      sum += current % 10;
      current = Math.floor(current / 10);
    }

    console.log(`Сума цифр: ${sum}`);

    // Цифровий корінь
    let root = sum;
    let chain = `${number} → ${sum}`;

    while (root >= 10) {
      let currentRoot = root;
      let nextSum = 0;

      // Внутрішній цикл
      while (currentRoot > 0) {
        nextSum += currentRoot % 10;
        currentRoot = Math.floor(currentRoot / 10);
      }

      root = nextSum;
      chain += ` → ${root}`;
    }

    console.log(chain);
    console.log(`Цифровий корінь: ${root}`);
  }
}

// 2.3. Розмін суми

const nominals = [500, 200, 100, 50, 20, 10, 5, 2, 1];

const amountInput = prompt("Введіть суму в гривнях:");

if (amountInput === null || amountInput.trim() === "") {
  console.log("Некоректний ввід");
} else {
  const amount = Number(amountInput);

  if (!Number.isInteger(amount) || amount < 0) {
    console.log("Некоректний ввід");
  } else {
    let remainder = amount;
    let totalPieces = 0;

    for (const nominal of nominals) {
      const count = Math.floor(remainder / nominal);

      if (count === 0) {
        continue;
      }

      console.log(`${nominal} x ${count}`);

      totalPieces += count;
      remainder = remainder % nominal;

      if (remainder === 0) {
        break;
      }
    }

    console.log(`Загальна кількість: ${totalPieces}`);
  }
}
