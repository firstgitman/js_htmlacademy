"use strict";

// ***Объявление**

let sym = Symbol();

let sym1 = Symbol();
console.log( typeof sym1 ); // symbol


let sym2 = Symbol("name");
console.log( sym2.toString() ); // Symbol(name)

// Если одинаковые символы, то они не равны

console.log( Symbol("name") == Symbol("name") ); // false


// ***Глобальные символы***

// создание символа в реестре
let name = Symbol.for("name");

// символ уже есть, чтение из реестра
console.log( Symbol.for("name") == name ); // true




// ***Получение по глобальному символу имя***

// создание символа в реестре

let test = Symbol.for("name");

// получение имени символа
console.log( Symbol.keyFor(test) ); // name



// ***Symbol.keyFor возвращает undefined, если символ не глобальный***

// name, глобальный
console.log( Symbol.keyFor(Symbol.for("name")) );

// undefined, обычный символ
console.log( Symbol.keyFor(Symbol("name2")) );


// ***Использование символов***

let isAdmin = Symbol("isAdmin");

let user = {
  name: "Вася",
  [isAdmin]: true
};

console.log( user[isAdmin] ); // true





// other

let user1 = {
  name: "Вася",
  age: 30,
  [Symbol.for("isAdmin")]:true
};

// в цикле for..in также не будет символа
console.log( Object.keys(user) ); // name, age

// доступ к свойству через глобальный символ - работает
console.log( user[Symbol.for("isAdmin")] );




// ***Symbol.iterator***

let obj = {
  iterator: 1,
  [Symbol.iterator]() {}
};

console.log( obj.iterator ); // 1

// function, символ не конфликтует
console.log( obj[Symbol.iterator] );



// other

let obj1 = {
  iterator: 1,
  [Symbol.iterator]: function() {}
};

// один символ в объекте

// Symbol(Symbol.iterator)
console.log( Object.getOwnPropertySymbols(obj1)[0].toString() );

// и одно обычное свойство
console.log( Object.getOwnPropertyNames(obj1) ); // iterator