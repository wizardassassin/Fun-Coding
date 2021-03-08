/*
Prime permutations

The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways:
(i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?

https://projecteuler.net/problem=49

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    nextPrime,
    nextLexicographicPermutation,
    isPrime
} from "./dependency.js";

export default function problem49(n = -1) {
    for (let i = nextPrime(1000); i < 10000; i = nextPrime(i)) {
        if (i == 1487)
            continue;
        let perm = nextLexicographicPermutation(i);
        do {
            if (isPrime(perm) && isPrime(2 * perm - i) && String(2 * perm - i).split('').sort().join('') == String(i).split('').sort().join(''))
                return Number(String(i) + String(perm) + String(2 * perm - i));
            perm = nextLexicographicPermutation(perm);
        } while (perm != i)
    }
    return -1;
}