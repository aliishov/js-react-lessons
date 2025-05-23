'use strict';

// const obj = {
//     'name': 'Test',
//     [Symbol('id')]: 1
// };

let id = Symbol("id");
// obj[id] = 1;
// console.log(obj[id]);
// console.log(obj['id']);

const obj = {
    'name': 'Test',
    [id]: 1,
    getId: function() {
        return this[id];
    }
};
// console.log(obj.getId());
// console.log(obj);

console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

const myAwesomeDb = {
    movies: [],
    actors: [],
    // id: 123
    // [Symbol('id')] : 123
    [Symbol.for('id')] : 123
};

myAwesomeDb.id = '321';

// console.log(myAwesomeDb['id']);
console.log(myAwesomeDb[Symbol.for('id')]);
console.log(myAwesomeDb);