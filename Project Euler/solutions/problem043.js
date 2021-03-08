/*
Sub-string divisibility

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits
0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d_2d_3d_4=406 is divisible by 2
d_3d_4d_5=063 is divisible by 3
d_4d_5d_6=635 is divisible by 5
d_5d_6d_7=357 is divisible by 7
d_6d_7d_8=572 is divisible by 11
d_7d_8d_9=728 is divisible by 13
d_8d_9d_10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.

https://projecteuler.net/problem=43

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { nextLexicographicPermutation, numString, nextPrime } from "./dependency.js";

export default function problem43(n = 9) {
    let acc = 0,
        a = numString(0, n),
        b = a;
    do {
        if (property(b))
            acc += Number(b);
        b = nextLexicographicPermutation(b);
    } while (a != b);
    return acc;
}

function property(b) {
    let a = 1;
    for (let i = 1, e = b.length - 2; i < e; i++) {
        a = nextPrime(a);
        if (b.substr(i, 3) % a != 0)
            return false;
    }
    return true;
}