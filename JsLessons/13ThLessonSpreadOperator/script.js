// Primitives
let a = 5,
    b = a;

b = b + 5;

console.log(b, a);

// Objects
const obj = {
    a: 5,
    b: 1
};

const copy = obj;
copy.a = 10
console.log(obj, copy);

function copyObj(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(numbers);
console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

// Arrays
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'd';

console.log(newArray);
console.log(oldArray);

// Spread Operator
const video = ['youtube', 'viemo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const nums = [2, 5, 7];
log(...nums);

const array = ['a', 'b'];

const q = {
    one: 1,
    two: 2
}

const newQ = {...q};
console.log(newQ);