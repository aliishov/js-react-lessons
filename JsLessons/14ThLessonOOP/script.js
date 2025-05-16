let str = "some";
let strObj = new String(str);
console.log(typeof(str), typeof(strObj));

console.dir([1, 2, 3]);

const solider = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 200
};

const raul = Object.create(solider);

// john.__proto__= solider; // Depricated

Object.setPrototypeOf(john, solider);

console.log(john);
console.log(john.armor);
john.sayHello();
raul.sayHello();