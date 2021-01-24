/*
Factorial digit sum

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

https://projecteuler.net/problem=20

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem20(n = 100) {
    return String(factorial(n)).split('').reduce((acc, cur) => Number(acc) + Number(cur));
}

const factorial = (n) => {
    let ret = 1n;
    n = BigInt(n);
    for (let i = 2n; i <= n; i++)
        ret *= i;
    return ret;
}