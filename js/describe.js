"use strict";

"use strict";

const describe = (value) => {
  let type =
    value === null
      ? "null"
      : Array.isArray(value)
        ? "array"
        : Number.isNaN(value)
          ? "NaN"
          : typeof value;

  let extra = "";
  let data = String(value);

  switch (type) {
    case "string":
      extra = `, Довжина: ${value.length}`;
      break;

    case "function":
      extra = `, Кількість аргументів: ${value.length}`;
      break;
    case "bigint":
      data = data + "n";
      break;
  }

  if (type === "array") {
    const items = value.map((item) => describe(item)).join("\n");
    return `Тип: array, Кількість елементів: ${value.length}\n[\n${items}\n]`;
  }

  if (type === "object") {
    const keys = Object.entries(value)
      .map(([key, val]) => `${key}: ${describe(val)}`)
      .join("\n");

    return `Тип: object, Ключі: ${Object.keys(value).join(", ")}\n{\n${keys}\n}`;
  }

  if (type === "symbol") {
    return `Тип: symbol, Значення: ${value.description ?? "без опису"}`;
  }

  return `Тип: ${type}, Значення: ${data}${extra}`;
};
