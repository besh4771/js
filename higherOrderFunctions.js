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
 

function average(array) {
    return array.reduce((a, b) => a + b) /array.length;
}
console.log(Math.round(average(
    SCRIPTS,filter(s => s.living).map(s => s.year)
)))
console.log(Math.round(average(
    SCRIPTS,filter(s => !s.living).map(s => s.year)
)))


function CountBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        }else{
            counts[known]++;
        }
    }
    return counts;
}
console.log(CountBy([1,2,3,4,5], n => n > 2));



function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'))
    