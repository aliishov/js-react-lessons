// const now = new Date('2025-05-24');
// const now = new Date(2025, 5, 1, 20);
const now = new Date();
            // new Date.parse('2025-05-24');

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours(), '\n');

console.log(now.getTimezoneOffset());
console.log(now.getTime(), '\n');

console.log(now.setHours(18));
console.log(now, '\n');

let start = new Date();
for (let i = 0; i < 100000000; i++) {
    let some = i ** 3;
}
let end = new Date();
console.log(`Cycle worked ${end - start} ms`);