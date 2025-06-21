"use strict"

// ✅ String
let name = "Viccky";
console.log("Type:", typeof name, "| Value:", name); // string Viccky

// ✅ Number
let age = 25;
console.log("Type:", typeof age, "| Value:", age); // number 25

// ✅ BigInt
let bigNum = 1234567890123456789012345678901234567890n;
console.log("Type:", typeof bigNum, "| Value:", bigNum); // bigint ...

// ✅ Boolean
let isLoggedIn = true;
console.log("Type:", typeof isLoggedIn, "| Value:", isLoggedIn); // boolean true

// ✅ Undefined
let notDefined;
console.log("Type:", typeof notDefined, "| Value:", notDefined); // undefined

// ✅ Null (special case: typeof returns 'object')
let empty = null;
console.log("Type:", typeof empty, "| Value:", empty); // object null

// ✅ Symbol
let uniqueId = Symbol("id");
console.log("Type:", typeof uniqueId, "| Value:", uniqueId); // symbol Symbol(id)

// ✅ Object
let person = { name: "Viccky", age: 25 };
console.log("Type:", typeof person, "| Value:", person); // object {...}

// ✅ Array (typeof is object, but it's an array)
let numbers = [1, 2, 3, 4];
console.log("Type:", typeof numbers, "| Value:", numbers); // object [1, 2, 3, 4]

// ✅ Function
function greet() {
  return "Hello!";
}
console.log("Type:", typeof greet, "| Value:", greet()); // function Hello!

// ✅ Type checking helpers
console.log("Is Array:", Array.isArray(numbers)); // true
console.log("Is Null:", empty === null); // true
console.log("Is Object:", typeof person === "object" && !Array.isArray(person) && person !== null); // true
