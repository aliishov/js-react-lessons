'use strict';

function unique(arr) {
    return Array.from(new Set(arr));
}

// const arr =[1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 7];
const arr = ['Raul', 'Zaur', 'Gunay', 'Raul'];
const set = new Set(arr);

set.add('Jeyla')
    .add('Yagut')
    .add('Raul');

const value = 'Raul';

// console.log(set);
// console.log(set.has(value));
// console.log(set.delete(value));
// console.log(set.clear());
// console.log(set.size);

for (let value of set) console.log(value);
// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// })

console.log(set.values());
console.log(set.keys(), "\n");
console.log(set.entries(), "\n");
console.log(unique(arr), "\n");