/*
Truncatable primes

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right,
and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

https://projecteuler.net/problem=37

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { isPrime } from 'mathjs';

export default function problem37(n = 11) {
    let acc = 0,
        amm = 0,
        start = 12;
    while (amm < n) {
        if (truncatable(start - 1)) {
            acc += start - 1;
            amm++;
        }
        if (truncatable(start + 1)) {
            acc += start + 1;
            amm++;
        }
        start += 6;
    }
    return acc;
}

function truncatable(a) {
    let right = String(a),
        left = right;
    while (right.length > 0) {
        if (!isPrime(right))
            return false;
        right = right.slice(0, -1)
    }
    while (left.length > 0) {
        if (!isPrime(left))
        return false;
        left = left.slice(1)
    }
    return true;
}
