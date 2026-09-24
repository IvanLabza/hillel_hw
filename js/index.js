"use strict";

const input = document.querySelector("#input");
const message = document.querySelector("#message");

input.addEventListener("focus", () => {
  message.hidden = false;
});

input.addEventListener("blur", () => {
  message.hidden = true;
});
