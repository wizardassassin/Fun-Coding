/*
Prime summations

It is possible to write ten as the sum of primes in exactly five different ways:

7 + 3
5 + 5
5 + 3 + 2
3 + 3 + 2 + 2
2 + 2 + 2 + 2 + 2

What is the first value which can be written as the sum of primes in over five thousand different ways?

https://projecteuler.net/problem=77

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { primeSieve } from "./dependency.js";

export default function problem77(n = 100) { // Arbitrary limit
    const sieve = primeSieve(n);
    const sieveSet = new Set(sieve);
    const sum = Array.from({ length: n }, (x, i) => []);
    for (let i = 0; i < n; i++) {
        let m = 0;
        for (let j = sieve[m++]; j <= i; j = sieve[m++]) {
            let k = i - j;
            for (let l of sum[k]) {
                if (l > j) {
                    break;
                }
                sum[i].push(j);
            }
        }
        if (sum[i].length > 5000)
            return i + 1;
        if (sieveSet.has(i + 1))
            sum[i].push(i + 1);
    }
    // console.log(sum)
}
