console.log('arr' + ' - object');
console.log(4 + '5');


// Increment & Decrement
let incr = 10,
    decr = 10;

incr++; // Postfix
decr--;

console.log(incr);
console.log(decr);

++incr; // Prefix
--decr;

console.log(incr);
console.log(decr);

console.log(5 % 2); // 1

// EQUALS & NOT
console.log(2 * 4 == '8');  // true
console.log(2 * 4 === '8'); // false
console.log(2 * 4 === 8);   // true
console.log(2 * 4 != 8);    // false

// AND, OR
const isChecked = true,
      isClosed = false;

console.log(isClosed && isChecked); // true && true = true | true && false = false
console.log(isClosed || isChecked); // true || true = true | true || false = true