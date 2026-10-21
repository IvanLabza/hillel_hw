"use strict";

const cardsContainer = document.querySelector("#cardsContainer");

cardsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-read-more-btn]");

  if (!button || !cardsContainer.contains(button)) return;

  const card = button.closest(".card");
  const longText = card.querySelector(".long-text");

  const isExpanded = card.classList.toggle("expanded");

  longText.hidden = !isExpanded;

  button.dataset.state = isExpanded ? "expanded" : "collapsed";
  button.textContent = isExpanded ? "Hide" : "Read more";
});
