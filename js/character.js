"use strict";

const hero = {
  name: "Geralt of Rivia",
  class: "Witcher",
  level: 100,
  isAlive: true,

  stats: {
    health: 100,
    mana: 100,
    strength: 100,
    agility: 100,
    intelligence: 100,
  },

  inventory: ["silverSword", "steelSword", "crossbow", "bombs", "potions"],

  abilities: {
    attack: function () {
      return `${hero.name} атакує!`;
    },
    heal: () => {
      return `${hero.name} лікується!`;
    },
    levelUp: () => {
      return `${hero.name} підвищує рівень!`;
    },
  },

  location: {
    city: "Novigrad",
    region: "Velen",
    coordinates: {
      x: 500,
      y: 400,
      z: 100,
    },
  },
};

// task 1

console.log("Завдання 1");

console.log(hero);

console.log(hero.name);

console.log(hero.class);

console.log(hero.level);

console.log(hero.isAlive);

// task 2

console.log("Завдання 2");

console.log(hero.stats);

console.log(hero.stats.strength);

console.log(hero.stats.intelligence * 2);

// task 3

console.log("Завдання 3");

console.log(hero.inventory);

console.log(hero.inventory[0]);

console.log(hero.inventory[hero.inventory.length - 1]);

console.log(hero.inventory.length);

// task 4

console.log("Завдання 4");

const enemy = {
  name: "Wild Hunt",
  "critical hit chance": 0.15,
  "attack-speed": 2.5,
  ["damage-" + hero.class]: 50,
};

// Спроба через крапку не спрацює:
// enemy.critical hit chance; // SyntaxError: неочікуваний ідентифікатор
// enemy.attack-speed;       // SyntaxError: неочікуваний символ '-'
// enemy.damage-Witcher;     // буде сприйнято як enemy.damage - Witcher

console.log(
  enemy["critical hit chance"],
  enemy["attack-speed"],
  enemy["damage-" + hero.class],
);

// task 5

console.log("Завдання 5");

console.log(hero.abilities.attack());

console.log(hero.abilities.heal());

console.log(hero.abilities.levelUp());

// task 6

console.log("Завдання 6");

console.log(hero.location.city);

console.log(hero.location.coordinates.z);

// task 7

console.log("Завдання 7");

const villain = {
  name: "Eredin",
  class: "Wild Hunt",
  level: 100,
  isAlive: true,

  stats: {
    health: 100,
    mana: 100,
    strength: 100,
    agility: 100,
    intelligence: 100,
  },

  inventory: ["silverSword", "steelSword", "crossbow", "bombs", "potions"],

  abilities: {
    attack: function () {
      return `${villain.name} атакує!`;
    },
    heal: () => {
      return `${villain.name} лікується!`;
    },
    levelUp: () => {
      return `${villain.name} підвищує рівень!`;
    },
  },
  location: {
    city: "Undvik",
    region: "Kaer Morhen",
    coordinates: {
      x: 100,
      y: 200,
      z: 300,
    },
  },
};

console.log(`Учасники дуелі: ${hero.name} ${hero.inventory.join(", ")} vs ${villain.name} ${villain.inventory.join(", ")}.
`);
