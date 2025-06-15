'use strict';

const persone = {
    name: 'Raul',
    tel: '+994775105900',
    parents: {
        mom: 'Yagut',
        dad: 'Vitaliy'
    }
};

console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Yaqut';
console.log(clone);