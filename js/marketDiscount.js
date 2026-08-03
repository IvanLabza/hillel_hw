"use strict";

const hasPromoCode = false;

const cartTotal = 101;

const isBlackFriday = true;

const isDiscountApplied = cartTotal >= 100 && (hasPromoCode || isBlackFriday);

console.log(isDiscountApplied ? "Знижка застосована" : "Знижка не застосована");

const noDiscount = !isDiscountApplied;
