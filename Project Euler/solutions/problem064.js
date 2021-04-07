/*
Odd period square roots

All square roots are periodic when written as continued fractions and can be written in the form:

[Check the Website]

For example, let us consider root 23:

[Check the Website]

If we continue we would get the following expansion:

[Check the Website]

The process can be summarised as follows:

It can be seen that the sequence is repeating. For conciseness, we use the notation root 23 = [4;(1,3,1,8)],
to indicate that the block (1,3,1,8) repeats indefinitely.

The first ten continued fraction representations of (irrational) square roots are:

[Check the Website]

Exactly four continued fractions, for N <= 13, have an odd period.

How many continued fractions for N <= 10000 have an odd period?

https://projecteuler.net/problem=64

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem64(n = 10000) { // Always worried about losing precision when dealing with decimals.
    let acc = 0;
    for (let i = 0; i <= n; i++) {
        let approx = Math.sqrt(i);
        if (Number.isInteger(approx)) continue;
        if (periodApproximation(approx) % 2)
            acc++;
    }
    return acc;
}

function periodApproximation(n) {
    let arr = new Set();
    while (true) {
        let save = String(n).slice(0, 7)
        n -= Math.floor(n)
        if (arr.has(save)) {
            let i = 0;
            for (let x of arr) {
                if (x == save)
                    return arr.size - i;
                i++;
            }
            console.log('failed')
            return;
        }
        if (n == 0) {
            console.log('Not irrational?')
            return arr.size;
        }
        arr.add(save)
        n = 1 / n;
    }
}
let thi = [2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 17, 512]
for (let i of thi)
    console.log(periodApproximation(Math.sqrt(i)))