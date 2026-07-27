  №  Вираз                  Моя гіпотеза  Реальний результат   Пояснення
                                                                                    
  1  `42`                   `number`      `number`            42 є числом, тому `typeof` повертає `"number"`.                                      
  2  `42n`                  `bigint`      `bigint`            Літерал `42n` має тип `BigInt`, який призначений для дуже великих цілих чисел.       
  3  `'hello'`              `string`      `string`            Рядкові значення мають тип `"string"`.                                               
  4  `true`                 `boolean`     `boolean`           Логічні значення `true` і `false` мають тип `"boolean"`.                             
  5  `undefined`            `undefined`   `undefined`         Значення `undefined` означає, що змінній не було присвоєно значення.                 
  6  `null`                 `object`      `object`            Це історична особливість JavaScript. `null` повертає `"object"`, хоча не є об'єктом. 
  7  `NaN`                  `number`      `number`            `NaN` означає «не число», але належить до числового типу.                            
  8  `Infinity`             `number`      `number`            `Infinity` є спеціальним числовим значенням, тому має тип `"number"`.                
  9  `Symbol('id')`         `symbol`      `symbol`            `Symbol` створює унікальне значення типу `"symbol"`.                                 
 10  `{}`                   `object`      `object`            Звичайний об'єкт має тип `"object"`.                                                 
 11  `[]`                   `object`      `object`            Масив є різновидом об'єкта, тому `typeof` повертає `"object"`.                       
 12  `[1, 2, 3]`            `object`      `object`            Будь-який масив у JavaScript має тип `"object"`.                                     
 13  `function() {}`        `function`    `function`          Для функцій `typeof` повертає `"function"`.                                          
 14  `(() => {})`           `function`    `function`          Стрілкова функція також має тип `"function"`.                                        
 15  `(2 + 2)`              `number`      `number`            Вираз обчислюється до числа `4`, тому тип `"number"`.                                
 16  `('2' + 2)`            `string`      `string`            Додавання рядка і числа створює новий рядок.                                         
 17  `('foo' - 'bar')`      `number`      `number`            Результатом є `NaN`, а `NaN` має тип `"number"`.                                     
 18  `let x;` → `x`         `undefined`   `undefined`         Змінна без значення має тип `"undefined"`.                                           
 19  `nonExistentVariable`  `undefined`   `undefined`         `typeof` не викликає помилку для неоголошеної змінної й повертає `"undefined"`.      
 20  `typeof 42`            `string`      `string`            Перший `typeof` повертає рядок `"number"`, а тип рядка — `"string"`.                 