const salaries = {
    raul: 500,
    zaur: 1000,
    gunay: 2500,
    sayHello: function() {
        console.log('Hello');
    }
};

salaries[Symbol.iterator] = function() {
    return {
        current: this.raul,
        last: this.gunay,

        next() {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }
        }
    };
};

// for (const res of salaries) {
//     console.log(res);
// }

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());