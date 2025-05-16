// Function declaration
function showFirstMessage() {
    console.log("Hello World!");
}
showFirstMessage();

// With arguments
function showText(text) {
    console.log(text);
}
showText("Hello World!");

// With return statement
function calc(a, b) {
    return a + b;
}
console.log(calc(5, 6));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

// Function Expression
const logger = function() {
    console.log("Hello!");
};
logger();

// Lambda function
const calculate = (a, b) => { 
    console.log(a, b);
    return a + b;
};
console.log(calculate(1, 2));