"use strict";

const input = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list");

// Додавання нового елемента
addBtn.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) return;

  const li = document.createElement("li");
  li.append(text + " ");

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✖";

  li.append(removeBtn);
  list.append(li);

  input.value = "";
});

// Єдиний обробник кліків на списку
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");

  if (!li || !list.contains(li)) return;

  // Якщо натиснули на ✖ — видаляємо li
  if (event.target.tagName === "BUTTON") {
    li.remove();
    return;
  }

  // Інакше перемикаємо selected
  li.classList.toggle("selected");
});
