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

// let theNumber = Number(prompt("Pick a number"))
// if(!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//     console.log("hey, give a number");
// }


// let result = 1;
// let counter =  0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);
// console.log(counter);


// let yourName;
// do {
//     yourName = prompt("who are you?");
// } while (!yourName);
// console.log(yourName);


// if (false != true) {
//     console.log("That makes sense");
//     if (1 < 2) {
//         console.log("No surprise there");
//     }
// }


// for (let number = 0; number <= 12; number = number +2) {
//     console.log(number);
// }


// for (let current = 20; ; current = current + 1) {
//     if (current % 7 == 0) {

//         console.log(current);
//         break;
//     }
// }
    

switch (prompt("what is the weather like?")){
    case "rainy":
        console.log("remember to bring umbrella");
        break;
    case "sunny":
        console.log("Dress lightly");
        break;
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("unknown weather type!");
        break;
}