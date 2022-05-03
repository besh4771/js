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
    

// switch (prompt("what is the weather like?")){
//     case "rainy":
//         console.log("remember to bring umbrella");
//         break;
//     case "sunny":
//         console.log("Dress lightly");
//         break;
//     case "cloudy":
//         console.log("Go outside");
//         break;
//     default:
//         console.log("unknown weather type!");
//         break;
// }


// for (let line = "*"; line.length < 8; line += "*") {
//     console.log(line);
// }


// let i;
// let j;
// for (i = 0; i <= 5; i++){
//     document.write("</br>");
//     for (j = 0; j < 6 - i; j++){
//         document.write("&nbsp&nbsp");
//         for (j = 6 - i; j <= 5; j++){
//             document.write("*");
//         }
//     }
// }

// function leftTriangle(rows){
//     let result = '';
//     for(let i = rows; i > 0; i--){
//         if(i===rows){
//             result += '*'.repeat(i) + '\n';
//         }else{
//             let empty = rows - i;
//             result += ' '.repeat(empty) + '*'.repeat(i)+ '\n'
//         }
//     }
//     return result;
// }
// console.log(leftTriangle(5));


const square = function(x) {
    return x * x;
};

console.log(square(12));

const makeNoise = function(){
    console.log("pling!");

}
makeNoise();

const power = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(2, 10));


let x = 10;
if (true) {
    let y = 20;
    let z = 30;
    console.log(x + y + z);
}


const hummus = function(factor) {
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");

};

// Arrow functions
const powar = (base, exponent) => {
    let result = 1;
    for (count = 0; count < exponent; count++) {
        result *= base;

    }
    return result;
};

const horn = () => {
    console.log("Toot");
};

function greet(who){
    console.log("Helllo " + who);
}
greet("Harry");
console.log("Bye");