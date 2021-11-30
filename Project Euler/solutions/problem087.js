/*
Prime power triples

The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

28 = 2² + 2³ + 2⁴
33 = 3² + 2³ + 2⁴
49 = 5² + 2³ + 2⁴
47 = 2² + 3³ + 2⁴

How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?

https://projecteuler.net/problem=87

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { primeSieve } from "./dependency.js";
// uses a lot of ram
export default function problem87(n = 50000000) {
    let sieve = primeSieve(n);
    let acc = new Set();
    let four1 = 0;
    let four = sieve[four1++];
    while (four ** 4 < n) {
        let three1 = 0;
        let three = sieve[three1++];
        while (four ** 4 + three ** 3 < n) {
            let two1 = 0;
            let two = sieve[two1++];
            while (four ** 4 + three ** 3 + two ** 2 < n) {
                acc.add(four ** 4 + three ** 3 + two ** 2);
                two = sieve[two1++];
            }
            three = sieve[three1++];
        }
        four = sieve[four1++];
    }
    // console.log(acc.has(101 ** 2 + 101 ** 3 + 2 ** 4));
    return acc.size;
}
