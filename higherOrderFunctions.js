function repeatLog(n){
    for(let i = 0; i < n; i++){
        console.log(i);
    }
}

function repeat (n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(3, console.log)

