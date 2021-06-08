/*
Totient permutation

Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number of positive numbers less than
or equal to n which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime
to nine, φ(9)=6.

The number 1 is considered to be relatively prime to every positive number, so φ(1)=1.

Interestingly, φ(87109)=79180, and it can be seen that 87109 is a permutation of 79180.

Find the value of n, 1 < n < 10^7, for which φ(n) is a permutation of n and the ratio n/φ(n) produces a minimum.

https://projecteuler.net/problem=70

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    totientSieve
} from "./dependency.js";


export default function problem70(n = 10000000) {
    let sieve = totientSieve(n);
    let acc,
        val = 10,
        i = 2;
    for (let x of sieve.slice(2)) {
        if (i / x < val && String(i).split('').sort().join('') == String(x).split('').sort().join(''))
            acc = i,
            val = i / x;
        i++;
    }
    return acc;
}