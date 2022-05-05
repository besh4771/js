// function repeatLog(n){
//     for(let i = 0; i < n; i++){
//         console.log(i);
//     }
// }

// function repeat (n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }
// repeat(3, console.log)

// let labels = [];
// repeat(5, i=> {
//     labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan11(10));

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("calling with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);