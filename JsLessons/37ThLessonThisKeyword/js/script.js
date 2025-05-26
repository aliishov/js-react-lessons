'use strict';

function showThis(a, b) {
    console.log(this); // undefined, without use strinc return window
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum(a, b), '\n');
}

showThis(5, 6);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); // return our object(obj)
    },

    sum2 : function() {
        function shout() {
            console.log(this, '\n'); // undefined
        }
        shout();
    }
};

obj.sum();
obj.sum2();

function User(name, id) {
    this.name = name;   // new object example (in our case it is raul)
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
const raul = new User('Raul', 20);

function sayName(surname) {
    console.log(this, this.name + ' ' + surname);
}

const user = {
    name: 'Raul'
};

sayName.call(user, 'Alishov');
sayName.apply(user, ['Alishov']);

console.log();

function count(num) {
    return this * num;
}
const double = count.bind(2);

console.log(double(6), '\n');

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
    console.log(this); // return element
});

btn.addEventListener('click', () => {
    console.log(this); // return window
});

const object = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
}

object.sayNumber();

const calc = a => a * 2;
console.log(calc(5), '\n');