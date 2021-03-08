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

import { distinctPrimeFactorsSum } from "./dependency.js";

export default function problem47(n = 4) { // Scale it to n variables and n prime factors
    let n1 = 2,
        n2 = n1 + 1,
        n3 = n1 + 2,
        n4 = n1 + 3;
    while (distinctPrimeFactorsSum(n1) != 4 || distinctPrimeFactorsSum(n2) != 4 || distinctPrimeFactorsSum(n3) != 4 || distinctPrimeFactorsSum(n4) != 4)
        ++n1,
        ++n2,
        ++n3,
        ++n4;
    return n1;
}
