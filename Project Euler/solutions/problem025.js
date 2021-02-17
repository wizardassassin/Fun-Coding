/*
1000-digit Fibonacci number

The Fibonacci sequence is defined by the recurrence relation:

F_n = F_n−1 + F_n−2, where F_1 = 1 and F_2 = 1.

Hence the first 12 terms will be:

F_1 = 1
F_2 = 1
F_3 = 2
F_4 = 3
F_5 = 5
F_6 = 8
F_7 = 13
F_8 = 21
F_9 = 34
F_10 = 55
F_11 = 89
F_12 = 144

The 12th term, F_12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

https://projecteuler.net/problem=25

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem25(n = 1000) {
    if (n == 0) return -1;
    if (n == 1) return 1;
    n = BigInt('1' + '0'.repeat(n - 1));
    let pre = 1n,
        cur = 1n,
        ind = 2;
    while (cur < n)
        cur += pre,
        pre = cur - pre,
        ind++;
    return ind;
}