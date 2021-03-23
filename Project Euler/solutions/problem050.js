/*
Consecutive prime sum

The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13

This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

https://projecteuler.net/problem=50

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    nextPrime
} from "./dependency.js";

export default function problem50A(n = 1000000) {
    let primeArr = [];
    let b = 2;
    let longestPrime;
    let longestPrimeLength = 0;
    while (b < n) {
        primeArr.push(b);
        b = nextPrime(b);
    }
    while (primeArr.length > 0) {
        let prime = primeArr.pop();
        primeArr.forEach((value, index) => { // Make more efficient
            let index1 = index;
            while (value < prime && index1 < primeArr.length - 1)
                value += primeArr[++index1];
            if (value == prime && index1 - index + 1 > longestPrimeLength)
                longestPrime = prime,
                longestPrimeLength = index1 - index + 1;
        });
    }
    return longestPrime;
}
