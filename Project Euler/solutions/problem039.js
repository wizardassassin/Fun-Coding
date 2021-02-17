/*
Integer right triangles

If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximized?

https://projecteuler.net/problem=39

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem39(n = 1000) {
    let acc = new Array(n + 1).fill(0);
    for (let i = 1, e = n; i <= e; i++) {
        for (let j = 1; j <= e; j++) {
            let c = Math.sqrt(i ** 2 + j ** 2);
            if (Math.floor(c) == c && i + j + c <= 1000)
                acc[i + j + c] += 1
        }
    }
    let res = [0, 0];
    acc.forEach((x, i) => {
        if (x > res[0]) {
            res[0] = x;
            res[1] = i;
        }
    });
    return res[1];
}