/*
Amicable chains

The proper divisors of a number are all the divisors excluding the number itself.
For example, the proper divisors of 28 are 1, 2, 4, 7, and 14.
As the sum of these divisors is equal to 28, we call it a perfect number.

Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220,
forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.

Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)

Since this chain returns to its starting point, it is called an amicable chain.

Find the smallest member of the longest amicable chain with no element exceeding one million.

https://projecteuler.net/problem=95

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { properDivisorsSum } from "./dependency.js";

export default function problem95(n = 1000000) {
    let max = 0;
    let min = n;
    let i = 0;
    while (i < n + 1) {
        let map = new Set();
        map.add(i);
        let len = 1;
        let sum = properDivisorsSum(i);
        while (sum > i && sum <= n && !map.has(sum)) {
            map.add(sum);
            len++;
            sum = properDivisorsSum(sum);
        }
        if (sum == i && len > max) {
            max = len;
            min = i;
        }
        i++;
    }
    return min;
}
