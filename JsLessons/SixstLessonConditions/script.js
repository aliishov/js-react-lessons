
// IF, ELSE, & ELSE IF 
if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Error!");
}

const num = 50;

if (num < 49) {
    console.log("Error!");
} else if (num > 100) {
    console.log("More!");
} else {
    console.log("Ok!");
}

// Ternary operator
(num == 50) ? console.log("Ok!") : console.log("Error!");

// SWITCH
const n = 50;

switch(n) {
    case 49:
        console.log("Incorrect!");
        break;
    case 100:
        console.log("Incorrect!");
        break;
    case 50:
        console.log("Correct!");
        break;
    default:
        console.log("Not this time!");
        break;
}