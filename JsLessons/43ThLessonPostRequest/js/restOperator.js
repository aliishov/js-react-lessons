const log = function(a, b, ...rest) {
    console.log(a, b, rest, '\n');
}
log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) { // After ES 6 Standart
    // basis = basis || 2; // Before ES 6 Standart
    console.log(number * basis);
}
calcOrDouble(3, 5);
calcOrDouble(7);