/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

https://projecteuler.net/problem=7
*/

import { isPrime } from 'mathjs'; // Who says I can't cheat?

export default function problem7(n = 10001) {
    if (n == 1) return 2;
    if (n == 2) return 3;
    let i = 6,
        prime = 2;
    while (prime < n) {
        if (isPrime(i - 1)) {
            prime++
        }
        if (prime == n) {
            return i - 1;
        }
        if (isPrime(i + 1)) {
            prime++
        }
        if (prime == n) {
            return i + 1;
        }
        i += 6
    }
    return -1;
}