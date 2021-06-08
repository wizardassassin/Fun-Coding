/*
Diophantine equation

Consider quadratic Diophantine equations of the form:

x^2 – Dy^2 = 1

For example, when D=13, the minimal solution in x is 649^2 – 13×180^2 = 1.

It can be assumed that there are no solutions in positive integers when D is square.

By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:

3^2 – 2×2^2 = 1
2^2 – 3×1^2 = 1
9^2 – 5×4^2 = 1
5^2 – 6×2^2 = 1
8^2 – 7×3^2 = 1

Hence, by considering minimal solutions in x for D ≤ 7, the largest x is obtained when D=5.

Find the value of D ≤ 1000 in minimal solutions of x for which the largest value of x is obtained.

https://projecteuler.net/problem=66

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    infiniteContinuedFraction
} from "./dependency.js";

export default function problem66(d = 1000n) {
    let val;
    let acc = 0n;
    for (let i = 0n; i <= d; i++) {
        let list = infiniteContinuedFraction(Number(i)).map(BigInt);
        if (list.length == 0n)
            continue;
        let init = list.shift();
        let h2 = 0n;
        let h1 = 1n;
        let h = init * h1 + h2;
        let k2 = 1n;
        let k1 = 0n;
        let k = init * k1 + k2;
        let j = 0n;
        let len = BigInt(list.length);
        while (h ** 2n - i * k ** 2n != 1n) {
            h2 = h1;
            h1 = h;
            h = list[j] * h1 + h2;
            k2 = k1;
            k1 = k;
            k = list[j] * k1 + k2;
            j = (j + 1n) % len;
        }
        if (h > acc) {
            acc = h;
            val = i;
        }
    }
    return Number(val);
}

/*
x^2 – Dy^2 = 1

*/