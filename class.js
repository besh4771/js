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