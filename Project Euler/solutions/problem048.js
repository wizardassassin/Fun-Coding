/*
Self powers

The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

https://projecteuler.net/problem=48

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem48(n = 1000) {
    n = BigInt(n);
    let acc = 0n,
        mod = 10n ** 10n;
    for (let i = 1n; i <= n; i++)
        acc += i ** i;
    return Number(acc % mod);
}
