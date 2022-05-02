// // let p = {x: 2.3, y: -1.2}
// // p.x

// let rectangle = {
//     upperLeft: {x: 2, y: 2},
//     lowerRight: {x: 4, y: 5}
// };


// // Function Definition Expressions
// let square = function(x) {return x * x;};

// // Numbers - Numeric values
// 13
// 12
// 15 + 23 - 45 * 34;
// Infinity - 2

// // NaN - Not a number
// // Strings
// `My name is Benjamin`
// 'My name is Benjamin'
// "My name is Benjamin"

// console.log(typeof 4.5)
// console.log(NaN == NaN) // false

// console.log(false || false) //false
// console.log(true && false) //true

// console.log(true ? 1 : 2) // Ternary operator

// let one = 1, two = 2;
// console.log(one + two);

// prompt("Enter passcode")

// Math.max(2, 4);

let theNumber = Number(prompt("Pick a number"))
if(!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
} else {
    console.log("hey, give a number");
}