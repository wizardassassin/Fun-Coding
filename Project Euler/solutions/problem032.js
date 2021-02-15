/*
Pandigital products

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

https://projecteuler.net/problem=32

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem32(n = -1) { // eh
    let acc = new Set();
    for (let i = 1; i < 10000; i++) {
        for (let j = 1; j < 10000; j++) {
            let b = i / j;
            if (Math.floor(b) != b)
                continue;
            let a = (String(i) + String(j) + String(b)).split('').sort().join('');
            if (a.indexOf('123456789') != -1 && a.length == 9) {
                acc.add(i);
            }
        }
    }
    let ret = 0;
    acc.forEach(x => ret += x)
    return ret;
}
