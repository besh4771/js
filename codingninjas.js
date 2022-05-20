// var temp = 10;
// temp = "Coding Ninjas";

// // Declaring multiple variables
// var temp1 = 10, temp2 = 20, temp3 = "coding Ninjas";

// var temp;
// console.log(temp); // undefined

// var x = "Coding";
// var y = "Ninjas";
// var z = x + y;
// console.log(z);

// x = 1;
// y = 2;
// console.log(x++ + ++y);

// console.log(temp);
// var temp = "Coding Ninja";


function area(length , breadth){
    let L = 4;
    let B = 20;
    const Area = L * B;
    Area();
    
	

        
   /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
  
}

console.log(4, 20);

































process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function main() {
    
    const arr = readLine().replace(/\s+$/g, '').split(' ');
    
    var length = (Number)(arr[0]);
    var breadth = (Number)(arr[1]);

    var res = area(length , breadth)
    console.log(res);
}