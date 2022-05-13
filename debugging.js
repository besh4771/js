function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++){
        console.log("Happy happy");
    }
}
canYouSpotTheProblem();
// ->  ReferenceError: counter is not defined

function test(label, body) {
        if (!body()) console.log(`Failed: ${label}`);
    }
    test("convert Latin text to uppercase", () => {
        return "hello".toUpperCase() == "HELLO";
    });
    test("convert Greek text to uppercase", () => {
        return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
    });
    test("don't convert case-less characters", () => {
        return "مرحبا".toUpperCase() == "مرحبا" ;
    });
        
    