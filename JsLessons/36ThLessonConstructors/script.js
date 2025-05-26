'use strict';

const num = new Number(3);
console.log(num);

const func = new Function(3);
console.log(func, '\n');


// ES 5 Standart
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} exit`);
}

const raul = new User('Raul', 20);
const gunay = new User('Gunay', 21);
console.log(raul);
console.log(gunay, '\n');

raul.hello();
gunay.hello();

console.log();

raul.exit();
gunay.exit();

// ES 6 Standart (Class)
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }

    hello() {
        console.log(`Hello ${this.name}`);
    }

    exit() {
        console.log(`User ${this.name} exit`);
    }
}