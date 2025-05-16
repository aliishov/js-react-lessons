// Arrays
const arr = [1, 2, 3, 4, 5, 6];

arr.pop();      // Deletin Item from End of the Array
arr.push(6);    // Add Item to End of the Array

arr.shift();    // Delete Item for Start of the Array
arr.unshift();  // Add Item to Start of the Array

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let val of arr) {  // For Of works only with Arrays and Pseudoarrays
    console.log(val);
}

arr.forEach(function(item, i, arr) {    // Cant use break and continue
    console.log(`${i}: ${item} in Array ${arr}`);
});

// SPLIT, JOIN, SORT
const str = prompt("", "");
const products = str.split(", ");
products.sort();    // Sort Only Strings

function compareNum(a, b) {
    return a - b;
}
arr.sort(compareNum);

console.log(arr);
console.log(products.join("; "));