const { TIS620_BIN } = require("mysql/lib/protocol/constants/charsets");

class Rabbit {
    constructor(type){
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);

    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbbit("black");



let object = new class{getWord() {return "hello";}};
console.log(object.getWord())


Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// small

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth)
// small

console.log(Array.prototype.toString == Object.prototype.toString)
// false


//// MAPS
// - A map is a data structure that associates values (the keys) with other values

let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
};
console.log(`Julia is ${ages["Julia"]}`);
// Julia is 62

console.log("Is Jacks age known?", "Jack" in ages);
// Is Jack's age known? false

console.log("Is toString's age known?", "toString" in ages)
// Is toString's age known? true


let details = new Map();
ages.set(39)
details.set("Boris")
details.set("Dwayne")


Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));


let sym = Symbol("name");
console.log(sym == Symbol("name"))


const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;

}
console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());


//// MATRIX CLASS
class Matrix{
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 0; y < height; y++){
            for (let x = 0; x < width; x++){
                this.content[y * width + x] = element(x, y)
            }
        }
    }

    get(x, y) {
        return this.content[y * width + x];
    }
    set(x, y, value) {
        this.content[y * thhis.width + x];
    }
}

class MatrixIterator{
    contructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next(){
        if (this.y == this.matrix.height) return {done: true};

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        }
        this.x++;
        if( this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}


let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};
console.log(varyingSize);

class Temperature {
    constructor(celsius){
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;

    }
    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30


class SymmetricMatrix extends Matrix{
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }
    set(x, y,value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}
let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
