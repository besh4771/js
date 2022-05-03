// function chicken(){
//     return egg();
// }
// function egg(){
//     return chicken();
// }
// console.log(chicken() + " came first.");

function square(x) { return x * x }
console.log(square(4, true, "hedgehog"));

function minus(a, b){
    if (b === undefined) return -a;
    else return a-b;
}
console.log(minus(10));  // -10
console.log(minus(10, 5));  // 5



function wrapValue(n){
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());


function findSolution(target) {
    function find(current, history) {
        if (current == target) {
        return history;
    } else if (current > target) {
        return null;
    } else {
        return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
    }
    }
    return find(1, "1");
}
console.log(findSolution(24));
