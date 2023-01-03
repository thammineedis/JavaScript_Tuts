// STRING
// string stores a series of characters like "John Alex"
// string calculated every thing including space & comma inside keyword value
value = "Hey Hi";

console.log("length of string is", value.length);

// INCLUDES attribute used to find out "Keyword" is exists or not?
// result will be returned a boolean if exists, value will be 'true' else 'false'
result = value.includes("Hey");
console.log("My word HEY exist or not::", result);

result = value.includes("Hello");
console.log("My word HELLO exist or not::", result);

// CONCAT attribute used to merge two string values
stringOne = "Hi, I am a ";
stringTwo = "UI/UX Designer";

merge = stringOne.concat(stringTwo);
console.log("Combined String Value is::", merge);

// ****
// SPLIT attribute is used to split a string in to array of substrings

let msg = "Hey hello how are you?";
// NOTE: If use a space in between inverted quotes will return sub strings as words
const myArray = msg.split(" ");

console.log("With Single SPACE My Array will be look like this::", myArray);

// IMPORTANT NOTE
// NOTE: If we remove the space in between inverted quotes will return every letter as string
const myArrayTwo = msg.split("");
console.log("Without SPACE My Array will be::", myArrayTwo);

// Also it will return sub string index value
console.log("My Array will be look like::", myArray[2]);

// ****
// SUBSTR attribute is used to extract a substring from the text

let someText = "World of Love";
let result = someText.substr(1, 8);

console.log("Extracted value is::", result);
