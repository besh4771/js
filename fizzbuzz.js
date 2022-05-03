// Write a program that uses console.log to print all the numbers from 1
// to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
// instead of the number, and for numbers divisible by 5 (and not 3), print
// "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz
// " for numbers that are divisible by both 3 and 5 (and still print "Fizz"
// or "Buzz" for numbers divisible by only one of those).


// for (let i = 1; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//     }else if(i % 3 == 0){
//         console.log("Fizz")
//     }else if(i % 5 == 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// for (var n = 1; n <= 100; n++) {
//     var output = "";
//     if (n % 3 == 0)
//       output += "Fizz";
//     if (n % 5 == 0)
//       output += "Buzz";
//     console.log(output || n);
// }

// function printFarmInventory(cows, chickens) {
//     let cowString = String(cows);
//     while(cowString.length < 3) {
//         cowString = "0" + cowString;
//     }
//     console.log(`${cowString} Cows`);
//     let chickenString = String(chickens);
//     while(chickenString.length < 3) {
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString
    }
    console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);