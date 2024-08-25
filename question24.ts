//  Define veriable

let apple = "apple";
let UppercaseApple = "Apple";
let Ten = 10;
let Twenty = 20;
let fruits = ["apple","banana","orange","mango"];


console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// Tests using lowercase function
console.log("\nIs Apple is equal to apple after converting to lowercase?");
console.log(UppercaseApple.toLowerCase() == "apple");

console.log("\nIs Apple is not equal to apple after converting to lowercase?") ;
console.log(UppercaseApple.toLowerCase() != "apple");

// Numerial tests
console.log("\n Is Ten is equal to Twenty?");
console.log(Ten == Twenty);

// not equal
console.log("\n Is Ten is not equal to Twenty?");
console.log(Ten != Twenty);

// greater than zero
console.log("\nIs Ten is greater than zero?");
console.log(Ten > 0);

// less than
console.log("\nIs Twenty is less than 10");
console.log(Twenty < 10);

// greater than or equal to
console.log("\nIs Ten is greater than or equal to 5?");
console.log(Ten >= 5);

// less than or equal to
console.log("\nIs Twenty is less than or equal to 10?");
console.log(Twenty <= 10);

// Tests using "and" & "or" operators

// using &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(Twenty != 10 && Twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(Twenty != 10 && Twenty > 30);

// using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 ==20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 !=20);

// test wheater an item is include in array
console.log("\nis orange include in my fruits array");
console.log(fruits.includes("orange"));

// not include
console.log("\nis orange include in my fruits array");
console.log(!fruits.includes("orange"));









