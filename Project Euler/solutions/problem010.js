/*
Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

https://projecteuler.net/problem=10

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { isPrime } from 'mathjs'; // Who says I can't cheat?

export default function problem10(n = 2000000) {
    if (n < 3) return 2;
    if (n < 5) return 5;
    let sums = 5;
    for (let i = 6; i < n + 1; i += 6) {
        if (isPrime(i - 1)) {
            sums += i - 1;
        }
        if (isPrime(i + 1) && (i <= n - 1)) {
            sums += i + 1;
        }
    }
    return sums;
}