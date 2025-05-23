'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

// let userName = NaN;
// console.log(userName ?? 'User');

let userName = undefined;
let userKey = undefined
console.log(userName ?? userKey ?? 'User');
// console.log(userName && userKey ?? 'User'); // Error cant user OR & AND operators with Nullish