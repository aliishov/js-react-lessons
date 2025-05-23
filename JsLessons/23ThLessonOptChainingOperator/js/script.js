'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

console.log(block?.textContent);
// block?.textContent = '123'; // Error

console.log(1 + 2);

const userData = {
    name: 'Raul',
    age: null,
    say : function() {
        console.log('Hello');
    }
};

console.log(userData.skills?.js);

userData.say();
userData.hey?.();