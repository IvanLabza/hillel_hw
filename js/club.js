"use strict";

//task 1

const employee = {
  id: Symbol("employee"),
  name: "Marpha",
  joinDate: "2024-01-15",
};

const student = {
  id: Symbol("student"),
  name: "John",
  joinDate: "2023-09-01",
};

const customer = {
  id: Symbol("customer"),
  name: "Sophia",
  joinDate: "2025-06-20",
};

console.log(employee);

console.log(student);

console.log(customer);

//task 2

const twin1 = {
  id: Symbol("twin"),
  name: "Marpha",
  joinDate: "2024-01-15",
};

const twin2 = {
  id: Symbol("twin"),
  name: "Marpha",
  joinDate: "2024-01-15",
};

console.log(twin1);

console.log(twin2);

console.log(twin1 === twin2); //false
console.log(twin1.id === twin2.id); //false
console.log(twin1.name === twin2.name); //true
console.log(twin1.id.description === twin2.id.description); //true

// Об'єкти twin1 і twin2 різні, тому порівняння === повертає false.
// Імена однакові, тому рядки рівні.
// Опис Symbol ("twin") теж однаковий, але Symbol('twin') щоразу
// створює новий унікальний символ. Опис потрібен лише для зручності
// читання та ніяк не впливає на унікальність Symbol.

//task 3

// const s1 = Symbol("secret");
// const s2 = Symbol(s1.description);
// console.log(s1 === s2); // false

// const s1 = Symbol("id");
// const s2 = Symbol("id");
// console.log(s1 == s2); // false

// const s = Symbol('id');
// alert(s); // Uncaught TypeError: Failed to execute 'alert' on 'Window': Cannot convert a Symbol value to a string
// alert(String(s)); // Symbol(id)
// alert(s.toString()); // Symbol(id)
// alert(s.description); // id

const uniqueKey = Symbol("meta");

const data = {
  publicName: "Alice",
  [uniqueKey]: "секретна інформація",
};

console.log(data);
// { publicName: 'Alice', [Symbol(meta)]: 'секретна інформація' }

console.log(data[uniqueKey]);
// секретна інформація

console.log(data.uniqueKey);
// undefined

console.log(Object.keys(data));
// ['publicName']

// Symbol-ключ не з'являється у Object.keys(), тому що цей метод
// повертає лише рядкові ключі об'єкта. Ключі типу Symbol
// приховані від звичайного переліку властивостей.
//
// Практична користь полягає в тому, що Symbol можна використовувати
// для зберігання службових або внутрішніх даних об'єкта.
// Такі властивості не будуть випадково перебрані через Object.keys(),
// for...in або JSON.stringify, а також не конфліктуватимуть
// з іншими ключами, оскільки кожен Symbol є унікальним.

// task 4

const member1 = {
  id: Symbol("member"),
  name: "Marpha",
  joinDate: "2024-01-15",
};

const member2 = {
  id: Symbol("member"),
  name: "John",
  joinDate: "2023-09-01",
};

const member3 = {
  id: Symbol("member"),
  name: "Alice",
  joinDate: "2022-11-20",
};

const member4 = {
  id: Symbol("member"),
  name: "Bob",
  joinDate: "2025-02-18",
};

const member5 = {
  id: Symbol("member"),
  name: "Sophia",
  joinDate: "2024-08-10",
};

const club = [member1, member2, member3, member4, member5];

function findMember(memberSymbol) {
  const member = club.find((item) => item.id === memberSymbol);

  return member || "Member not found";
}

// Знайде учасника
console.log(findMember(member3.id));

// Не знайде, хоча опис Symbol однаковий
console.log(findMember(Symbol("member")));

//task 5

const a = Symbol("shared");
const b = Symbol("shared");

console.log(a === b); // false

const c = Symbol.for("shared");
const d = Symbol.for("shared");

console.log(c === d); // true

// Очікуваний результат для c === d — true,
// тому що Symbol.for() використовує глобальний реєстр символів.
// Якщо символ з таким ключем уже існує, він повертає його,
// а не створює новий.
//
// JavaScript має два способи створення Symbol:
// 1. Symbol() — створює новий унікальний символ щоразу.
//    Підходить для унікальних ідентифікаторів та ключів.
// 2. Symbol.for() — повертає один і той самий символ
//    для однакового ключа із глобального реєстру.
//    Підходить, коли різні частини програми повинні
//    використовувати один і той самий Symbol.
//
// Приклад використання Symbol.for():
// У великому застосунку кілька модулів можуть звертатися
// до спільного символу "user". За допомогою Symbol.for("user")
// усі модулі отримають один і той самий Symbol, навіть якщо
// вони не обмінювалися ним напряму.
