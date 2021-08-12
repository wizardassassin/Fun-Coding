/*
Counting fractions in a range

Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:

1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

It can be seen that there are 3 fractions between 1/3 and 1/2.

How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ 12,000?

https://projecteuler.net/problem=73

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem73(n = 12000) {
    let [a, b, c, d] = [1, 3, ...fareyRight(1, 3, n)];
    let acc = 0;
    while (c != 1 && d != 2) {
        let k = Math.floor((n + b) / d);
        [a, b, c, d] = [c, d, k * c - a, k * d - b];
        acc++;
    }
    return acc;
}

function fareyLeft(num, den, n) {
    while (n)
        if (Number.isInteger((num * n-- - 1) / den))
            return [(num * ++n - 1) / den, n];
    console.error('Couldn\'t find a solution.');
    return [0, 0];
}

function fareyRight(num, den, n) {
    let [a, b, c, d] = [...fareyLeft(num, den, n), num, den];
    let k = Math.floor((n + b) / d);
    [a, b, c, d] = [c, d, k * c - a, k * d - b];
    return [c, d];
}