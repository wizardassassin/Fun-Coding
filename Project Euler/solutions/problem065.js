/*
Convergents of e

The square root of 2 can be written as an infinite continued fraction.

It turns out that the sequence of partial values of continued fractions for square roots provide the best rational approximations. Let us consider the convergents for sqrt(2).

Find the sum of digits in the numerator of the 100th convergent of the continued fraction for e.

Too complicated to transcribe this.

https://projecteuler.net/problem=65

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem65(n = 100n) {
    let pre2 = 1n,
        pre1 = 1n,
        log;
    for (let i = 1n; i <= n; i++)
        log = pre1,
        pre1 = ((i % 3n) ? 1n : i / 3n * 2n) * pre1 + pre2,
        pre2 = log;
    return Number(String(pre1).split('').reduce((a, b) => a - -b));
}