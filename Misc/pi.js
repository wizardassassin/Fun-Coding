/*

References:
https://www.youtube.com/watch?v=CKl1B8y4qXw
https://en.wikipedia.org/wiki/Chudnovsky_algorithm
*/
import pkg from 'decimal.js';

const {
    Decimal
} = pkg;

let check = new Decimal(5)

check = check.add(13)

console.log(check)
