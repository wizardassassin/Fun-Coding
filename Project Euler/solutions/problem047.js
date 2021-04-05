/*
Distinct primes factors

The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

https://projecteuler.net/problem=47

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    nextPrime
} from "./dependency.js";

export default function problem47(n = 4) { // Scale it to n variables and n prime factors
    let n1 = 2;
    while (true) {
        if (distinctPrimeFactorsSum(n1 + 3) != 4)
            n1 += 4;
        else if (distinctPrimeFactorsSum(n1 + 2) != 4)
            n1 += 3;
        else if (distinctPrimeFactorsSum(n1 + 1) != 4)
            n1 += 2;
        else if (distinctPrimeFactorsSum(n1) != 4)
            n1 += 1;
        else
            return n1;
    }
} // went from 147 seconds to 13 seconds. Yay!

function distinctPrimeFactorsSum(a) { // Not a big diff
    if (a < 2)
        return -1;
    let arr = 0;
    let fac = 2;
    while (a > 1) {
        if (a % fac == 0)
            arr++;
        while (a % fac == 0)
            a /= fac;
        fac = nextPrime(fac);
    }
    return arr;
}