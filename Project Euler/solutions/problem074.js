/*
Digit factorial chains

The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:

1! + 4! + 5! = 1 + 24 + 120 = 145

Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:

169 → 363601 → 1454 → 169
871 → 45361 → 871
872 → 45362 → 872

It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,

69 → 363600 → 1454 → 169 → 363601 (→ 1454)
78 → 45360 → 871 → 45361 (→ 871)
540 → 145 (→ 145)

Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

How many chains, with a starting number below one million, contain exactly sixty non-repeating terms?

https://projecteuler.net/problem=74

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    factorial
} from "./dependency.js";

export default function problem74(n = 1000000) {
    const fact = Array.from({length: 10}, (_, i) => Number(factorial(i)));
    // console.log(fact)
    let count = 0;
    for (let i = 0; i < n; i++) {
        const store = new Set();
        let acc = 0;
        let a = i;
        while (!store.has(a)) {
            store.add(a);
            a = digitFactorial(a, fact);
            acc++;
        }
        if (acc == 60) {
            count++;
        }
        // console.log(acc, store, a)
    }
    return count;
}

function digitFactorial(n, fact) {
    return String(n).split('').reduce((a, b) => a + fact[b], 0);
}