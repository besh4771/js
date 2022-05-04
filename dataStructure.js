// Methods
let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let sequence = [1, 2, 3];
sequence.push(4);  // adds value to the end of an array
sequence.push(5);
console.log(sequence);

console.log(sequence.pop())   // removes the last element from an array
console.log(sequence)

// Objects

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);

let description = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

let journol = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true},
];

let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel})
}

    