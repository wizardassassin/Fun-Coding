/*
lim x -> ∞ [(1 + 1/n)^n]

lim x -> 0 [(1 + n)^(1/n)]

Ref: My high school calculus AB textbook

I also just realized that both equations do the same thing. 10 - 0.1; 100 - 0.01; 1000 - 0.001
*/

import pkg from 'decimal.js';

const {
    Decimal
} = pkg;

let a = 300;

Decimal.set({
    precision: a + 1,
});

console.log(Decimal.pow(10, -a).add(1).pow(Decimal.pow(10, a)))
console.log(Decimal('0.'+'0'.repeat(a-1)+'1').add(1).pow('1'+'0'.repeat(a)))
console.log(Decimal.exp(1))

console.table()