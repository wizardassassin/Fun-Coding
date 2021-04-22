/*
Combinatoric selections

There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, C(5, 3)**Not the actual notation** = 10.

In general, C(n, r) = (n!)/(r!(n-r)!), where r <= n, n! = n * (n-1) * ... * 3 * 2 * 1, and 0! = 1.

It is not until n = 23, that a value exceeds one-million: C(23, 10) = 1144066.

How many, not necessarily distinct, values of C(n, r) for 1 <= n <= 100, are greater than one-million?

**Check the website for how it actually looks like**

https://projecteuler.net/problem=53

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { combinations } from "./dependency.js";

export default function problem53(a = 1000000) {
    let acc = 0;
    for (let n = 1; n <= 100; n++)
        for (let r = 0; r <= n; r++)
            if (combinations(n, r) > a)
                acc++;
    return acc;
}