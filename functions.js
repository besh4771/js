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