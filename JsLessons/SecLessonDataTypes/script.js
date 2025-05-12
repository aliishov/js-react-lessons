// Numbers
let a = 4;
let b = 4.6;

console.log(a/0);  // Infinity
console.log(-a/0); // -Infinity

console.log('string' * 9); // NaN (Not an Number)


// String
let personOne = "Raul";
let personTwo = 'Zaur';
let personThree = `Gunay`;

console.log(personOne, personTwo, personThree);


// Boolean (True / False)
const t = true;
const f = false;


// Null & Undefind
let n = null;

let und; // undefind;

console.log(n, und);


// Object
const obj = {
    name: "Raul",
    age: 20,
    isMarried: false
};

console.log(obj.name);
console.log(obj["age"]);
console.log(obj);

let arr = ['plum.png', 'orange.jpg', 6, true, {}, []]; // Arrays also objects
console.log(arr[0]);
console.log(arr[2]);