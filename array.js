// Simple array declaration: name of the Array = [Keyword/keywords]
showAry = [1, "James", 2, "Jones"];

// CONSOLE.LOG: Used to print values on Terminal/Browser
console.log("Number Array Length is", showAry.length); // We used 'LENGTH' attribute to find out the Length of the Array

simpleArray = [3, "Jones"];

console.log("Names Array Length is", simpleArray.length);

// Another array declaration
diffAry = [7, 8, "Cars & Bikes"];

console.log("Different Array Length is", diffAry.length);

// SPREAD OPERATOR: We use this operator to club arrays. This operator simply start with 3 dots(...) before the array name. And we club arrays by separated with comma(,) So[...array1, ...array2, ...array3, and so on]
result = [...showAry, ...diffAry];

// We used 'result' attribute to find out the result.
console.log("Final Result is", result);

result = [...showAry, ...simpleArray, ...diffAry];

console.log("All Arrays Mixed and final result will be look like:", result);

/*

***********   NEW PRACTICES FOR 'Push', 'Pop' & 'Index'   ***********

*/

// PUSH Array:
// It is used to add a new item to particularly to an array. At the same time it will change the LENGTH of the Array

const myCars = ["Toyota", "Audi", "BMW", "Ferrari"];

// Add some more items using push
myCars.push("Benz", "Mahindra", "Scoda");

console.log("Finally My Cars list Length is:", myCars.length);

result = [...myCars];
console.log("Finally My Cars list will be like this:", result);

// POP Array:
// It is used to remove last item from particularly to an array. At the same time it will change the LENGTH of the Array

myCars.pop();

console.log("Finally My Cars list Length is:", myCars.length);

// POP returns the REMOVED element from the Array. See below example
let removed = myCars.pop();
console.log("From My Cars list Deleted item is:", removed);

// INDEX Array
// index used to return the position of a specified value in an array

const newTech = ["Node JS", "React", "Vue JS", "Angular"];
let index = newTech.indexOf("Vue JS");

console.log("Item index is:", index);

// FINDINDEX used to return first element with a value over particular number

const ageGroup = [8, 12, 18, 24, 30];

ageGroup.findIndex(checkAge);

function checkAge(age) {
  return age > 14;
}

result = [...ageGroup];
console.log("Result is:", result);
