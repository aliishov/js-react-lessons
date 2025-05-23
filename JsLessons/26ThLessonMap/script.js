'use strict';

const user = {
    name: 'Raul',
    surname: 'Alishov',
    birthday: '27/10.2004',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`)
    }
};
console.log(user, "\n");

const userMap = new Map(Object.entries(user));
console.log(userMap, "\n");

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj, "\n");

const shops =[
    {rice: 500},
    {oil: 200},
    {bread: 50}
];
const budget = [5000, 15000, 25000];
const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

// map.set(shops[0], 5000);
//     set(shops[1], 15000);
//     set(shops[2], 25000);

console.log(map, "\n");
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// console.log(map.delete(shops[0]));
// console.log(map.clear());
// console.log(map.size);

const goods = [];
console.log(map.keys(), "\n");
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
    console.log(shop);
}

console.log(goods, "\n");

for (let price of map.values()) {
    console.log(price);
}

for (let entry of map.entries()) {
    console.log(entry);
}
// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

map.forEach((value, key, map) => {
    console.log(key, value);
})