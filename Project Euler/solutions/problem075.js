/*
Singular integer right triangles

It turns out that 12 cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.

12 cm: (3,4,5)
24 cm: (6,8,10)
30 cm: (5,12,13)
36 cm: (9,12,15)
40 cm: (8,15,17)
48 cm: (12,16,20)

In contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using 120 cm it is possible to form exactly three different integer sided right angle triangles.

120 cm: (30,40,50), (20,48,52), (24,45,51)

Given that L is the length of the wire, for how many values of L ≤ 1,500,000 can exactly one integer sided right angle triangle be formed?

https://projecteuler.net/problem=75

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

/*
Used Resources:
https://en.wikipedia.org/wiki/Formulas_for_generating_Pythagorean_triples
https://en.wikipedia.org/wiki/Pythagorean_triple
*/

import { gcd } from "./dependency.js";

export default function problem75(i = 1500000) {
    let lengths = new Array(i).fill(0);
    // let test = [];//
    let m = 2;
    let n = 1;
    while (2 * m * (m + n) <= i) {

        while (2 * m * (m + n) <= i && n < m) {
            if (gcd(m, n) != 1) {
                n += 2;
                continue;
            }
            // test.push([]);//
            let k = 1;
            let val = 2 * m * (m + n);
            // let tempB = false;//
            // if (val == 12 || val == 30 || val == 40) {
            //     tempB = true;
            //     console.log(m, n)
            // }
            while (k * val <= i) {
                // if (tempB && k < 12)
                //     console.log(k * val)
                lengths[k * val - 1]++;
                k++;
            }
            n += 2;
        }
        m += 1;
        if (m % 2 == 0)
            n = 1;
        else
            n = 2;
    }
    let acc = 0;
    for (let solutions of lengths)
        if (solutions == 1)
            acc++;
    // console.log(lengths[119])//
    return acc;
}
