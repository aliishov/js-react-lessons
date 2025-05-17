// To String
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(5)));

// 2)
console.log(typeof(null + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// Tu Number
// 1)
console.log(typeof(Number('5')));

// 2)
console.log(typeof(+ '5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

// 4)
let answer = +prompt('Hello');

// To Boolean
// False
console.log(Boolean(0));            // zero
console.log(Boolean(''));           // empty string
console.log(Boolean(null));         // null
console.log(Boolean(NaN));          // NaN
console.log(Boolean(undefined));    // undefined

let switcher = null;
if (switcher) { // false
    console.log('Working...');
}

switcher = 1;
if (switcher) { // true
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4'));