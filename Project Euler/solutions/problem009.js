/*
Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.

Find the product abc.

https://projecteuler.net/problem=9

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem9(n = 1000) {
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            let c = Math.sqrt(a ** 2 + b ** 2);
            if (Number.isInteger(c) && a + b + c == 1000) {
                return a * b * c;
            }
        }
    }
    return -1;
}