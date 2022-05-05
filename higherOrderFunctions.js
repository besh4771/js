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

// {
//     name: "Coptic",
//     ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
//     direction: "ltr",
//     year: -200,
//     living: false,
//     link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
// }


// filtering arrays
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter(SCRIPTS, script => script.living));


function map(array, transform) {
    let mapped = [];
    for(let element of array) {
        mapped.push(transform(element));
    }
    return mapped
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));


function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
    