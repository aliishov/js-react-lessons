const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; // Destructuring
console.log(border, bg);

console.log(options.name);
// delete options.name;
console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property: ${i} has value: ${options[key][i]}`);
        }
    } else {
        console.log(`Property: ${key} has value: ${options[key]}`);
    }
    counter++;
}

console.log(counter);
console.log(Object.keys(options));
console.log(Object.keys(options).length);