console.log("========== STRING CONVERSIONS ==========");

// Number → String
let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"

// Boolean → String
let bool = true;
console.log(String(bool)); // "true"

// Object → String
let obj = { name: "Viccky" };
console.log(String(obj)); // "[object Object]"
console.log(JSON.stringify(obj)); // "{"name":"Viccky"}"

// Array → String
let arr = [1, 2, 3];
console.log(String(arr)); // "1,2,3"


console.log("\n========== NUMBER CONVERSIONS ==========");

// String → Number
let str = "456";
console.log(Number(str)); // 456
console.log(parseInt(str)); // 456
console.log(parseFloat("123.45")); // 123.45

// Invalid String → Number
console.log(Number("abc")); // NaN

// Boolean → Number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Null / Undefined → Number
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN


console.log("\n========== BOOLEAN CONVERSIONS ==========");

// Number → Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

// String → Boolean
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

// Null / Undefined → Boolean
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// Object / Array → Boolean
console.log(Boolean({})); // true
console.log(Boolean([])); // true


console.log("\n========== IMPLICIT (AUTO) CONVERSIONS ==========");

// String + Number → String
console.log("5" + 3); // "53"
console.log(3 + "5"); // "35"

// String - Number → Number
console.log("5" - 3); // 2

// Boolean + Number
console.log(true + 2); // 3
console.log(false + 5); // 5

// Null + Number
console.log(null + 10); // 10

// Undefined + Number
console.log(undefined + 10); // NaN


console.log("\n========== SPECIAL CONVERSIONS ==========");

// Anything → Boolean
let values = [0, 1, "", "abc", null, undefined, [], {}, NaN];
values.forEach(val => {
  console.log(`Boolean(${JSON.stringify(val)}) →`, Boolean(val));
});

// JSON ↔ Object
let jsonStr = '{"name":"Viccky","age":25}';
let objFromJson = JSON.parse(jsonStr);
console.log(objFromJson); // { name: 'Viccky', age: 25 }

let jsonFromObj = JSON.stringify(objFromJson);
console.log(jsonFromObj); // '{"name":"Viccky","age":25}'
