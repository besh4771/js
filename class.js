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
