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

import pkg from 'decimal.js';

const {
    Decimal
} = pkg;

export default function problem66(d = 1000) {
    let acc;
    for (let i = 660; i <= 665; i++) {
        if (Number.isInteger(Math.sqrt(i)))
            continue;
        let x = 2;
        Decimal.pow(x, 2).minus(1).dividedBy(i).sqrt().isInteger()
        while (!Decimal.pow(x, 2).minus(1).dividedBy(i).sqrt().isInteger()) {
            if (x % 100000 == 0)
                console.log(x)
            x++;
        }
        console.log(x, i)
    }
    return acc;
}

/*
x^2 – Dy^2 = 1

*/