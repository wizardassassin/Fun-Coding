/*

References:
https://www.youtube.com/watch?v=CKl1B8y4qXw
https://en.wikipedia.org/wiki/Chudnovsky_algorithm
*/

import pkg from 'decimal.js';

const {
    Decimal
} = pkg;

Decimal.set({
    precision: 100
});

console.log(Decimal.acos(-1))
