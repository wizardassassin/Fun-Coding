/*
Digit factorials

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included.

https://projecteuler.net/problem=34

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { factorial } from 'mathjs';

export default function problem34(n = 9) {
    let acc = 0,
        lim = 1,
        fact = factorial(n);
    while (10 ** lim < fact * lim)
        lim++;
    lim = 10 ** lim;
    for (let i = 10; i < lim; i++)
        if (String(i).split('').reduce((acc, cur) => acc += factorial(cur), 0) == i)
            acc += i;
    return acc;
}
