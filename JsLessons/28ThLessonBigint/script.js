'use strict';

const bigint = 12312312123123123123131423432412314123131412n;
const sameBigint = BigInt(12312312123123123123131423432412314123131412);
console.log(typeof(bigint));

console.log(1n + 2n, "\n");
// console.log(5n + 7); // error
// console.log(Math.round(bigint)); // error

let bn = 1n;
let number = 2;
console.log(bn + BigInt(number));