"use strict";

// task 1

const user = {
  name: "John",
  age: 22,
  email: "john@example.com",
  isSubscribed: true,
  balance: 100,
  verified: "1",
};

const validAge = user.age <= 18;

const balance = user.balance;

const verified = Boolean(user.verified);

let message = validAge ? "Access restricted due to age" : undefined;

const isAccess =
  (user.age >= 18 && verified && user.isSubscribed) || balance > 0;

const ageComparison = user.age == "18";

const ageComparison2 = user.age === "18";

if (validAge) {
  console.log(message);
}

console.log("isAccess:", isAccess);
console.log("ageComparison:", ageComparison);
console.log("ageComparison2:", ageComparison2);

// task 2

const order = {
  total: "1001",
  currency: "USD",
  isPaid: false,
  delivery: "yes",
  priority: "1",
};

const total = Number(order.total);
const delivery = order.delivery === "yes" ? true : false;
const priority = Boolean(order.priority);
const largeOrder = total > 1000;

if (largeOrder) {
  console.log("Order is large");
}

if (order.isPaid === false) {
  console.log("Order is not paid");
}

if (order.isPaid === true && delivery) {
  console.log("Paid order with delivery");
}

if (largeOrder && order.isPaid) {
  console.log("High-value paid order");
}

if (order.isPaid && !delivery) {
  console.log("Paid order without delivery");
}

if (priority) {
  console.log("[PRIORITY]");
}

const numberTotal = total == order.total;
const numberTotal2 = total === order.total;

console.log("numberTotal:", numberTotal);
console.log("numberTotal2:", numberTotal2);

// task 3

const systemSettings = {
  darkMode: true,
  fontSize: "18",
  language: "en",
  betaAccess: "true",
};

const fontSize = Number(systemSettings.fontSize);
const betaAccess = Boolean(systemSettings.betaAccess);
const isLargeFont = fontSize >= 18;

if (isLargeFont && systemSettings.darkMode) {
  console.log("Dark mode + large font");
} else {
  console.log("Default settings");
}

if (systemSettings.darkMode) {
  console.log("Dark mode");
} else {
  console.log("Default settings");
}

if (isLargeFont) {
  console.log("Large font");
} else {
  console.log("Default settings");
}

if (betaAccess) {
  console.log("(Beta tester)");
}

// task 4

let validSystemSettings;

if (
  (systemSettings.darkMode &&
    fontSize > 12 &&
    systemSettings.language === "en") ||
  systemSettings.language === "uk"
) {
  validSystemSettings = true;
} else {
  validSystemSettings = false;
}

const paid = order.isPaid || balance >= total;

const finalAccess =
  isAccess && paid && validSystemSettings
    ? console.log("Full access granted")
    : console.log("Access denied");
