/*
Digit fifth powers

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

https://projecteuler.net/problem=30

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem30(n = 5) {
    let acc = 0,
        en = 1,
        a = 9 ** n;
    while (10 ** en < en * a)
        en++;
    en = 10 ** en;
    for (let i = 10; i <= en; i++) {
        if (String(i).split('').reduce((acc, cur) => acc + cur ** n, 0) == i)
            acc += i;
    }
    return acc;
}
