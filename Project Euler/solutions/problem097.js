/*
Large non-Mersenne prime

The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime
of the form 2^6972593−1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes,
of the form 2p−1, have been found which contain more digits.

However, in 2004 there was found a massive non-Mersenne prime
which contains 2,357,207 digits: 28433×2^7830457+1.

Find the last ten digits of this prime number.

https://projecteuler.net/problem=97

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem97(n = -1) {
    return Number((28433n * 2n ** 7830457n + 1n) % 10000000000n); // Cool, built in // Power Mod
}
