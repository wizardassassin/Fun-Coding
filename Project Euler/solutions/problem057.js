/*
Square root convergents

It is possible to show that the square root of two can be expressed as an infinite continued fraction.

sqrt 2 = 1 + 1 / (2 + 1 / (2 + 1 / (2 + ...)))

By expanding this for the first four iterations, we get:

[some math syntax] = 3/2 = 1.5
[some math syntax] = 7/5 = 1.4
[some math syntax] = 17/12 = 1.41666...
[some math syntax] = 41/29 = 1.41379...

The next three expansions are 99/70, 239/169, and 577/408, but the eighth expansion, 1393/985, is the first example where the number of digits
in the numerator exceeds the number of digits in the denominator.

In the first one-thousand expansions, how many fractions contain a numerator with more digits than the denominator?

https://projecteuler.net/problem=57

It's better to just look at the problem from the Project Euler website

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem57(n = 1000) {
    let acc = 0;
    let num1 = -1n, den1 = 1n; // f(-2)
    let num2 = 1n, den2 = 0n; // f(-1)
    let num3 = 1n, den3 = 1n; // f(0)
    while (n--) {
        num3 = num3 * 2n + num2;
        num2 = (num3 - num2) / 2n;
        num1 = num3 - num2 * 2n;
        den3 = den3 * 2n + den2;
        den2 = (den3 - den2) / 2n;
        den1 = den3 - den2 * 2n;
        if (String(num3).length > String(den3).length)
            acc++;
    }
    return acc;
}

/*
num1 += num3;
num3 = (num2) * 2 + num1 - num3;
num2 = num1 - num3 + num2 * 2;
num1 = (num3 - num1 + num2) / 2;
*/