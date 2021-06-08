/*
Magic 5-gon ring

Consider the following "magic" 3-gon ring, filled with the numbers 1 to 6, and each line adding to nine.


Working clockwise, and starting from the group of three with the numerically lowest external node (4,3,2 in this example),
each solution can be described uniquely. For example, the above solution can be described by the set: 4,3,2; 6,2,1; 5,1,3.

It is possible to complete the ring with four different totals: 9, 10, 11, and 12. There are eight solutions in total.

Total	Solution Set
9	4,2,3; 5,3,1; 6,1,2
9	4,3,2; 6,2,1; 5,1,3
10	2,3,5; 4,5,1; 6,1,3
10	2,5,3; 6,3,1; 4,1,5
11	1,4,6; 3,6,2; 5,2,4
11	1,6,4; 5,4,2; 3,2,6
12	1,5,6; 2,6,4; 3,4,5
12	1,6,5; 3,5,4; 2,4,6

By concatenating each group it is possible to form 9-digit strings; the maximum string for a 3-gon ring is 432621513.

Using the numbers 1 to 10, and depending on arrangements, it is possible to form 16- and 17-digit strings.
What is the maximum 16-digit string for a "magic" 5-gon ring?

https://projecteuler.net/problem=68

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    heapPermutation
} from "./dependency.js";

export default function problem68(n = -1) {
    // Brute force works; 10! options / 5 rotations = 3628800 / 5 checks or calculations
    // Solving using math also works; max the first two leading digits, go from there
    let max = 0;
    const options = heapPermutation(Array.from({
        length: 10
    }, (_, i) => i + 1));
    for (const [a, b, c, d, e, f, g, h, i, j] of options) {
        if (a + b == c + f && e + f == g + j && g + h == i + b && i + j == a + d && b != 10 && d != 10 && f != 10 && h != 10 && j != 10) {
            const arr = [
                [a, b, d],
                [c, d, f],
                [e, f, h],
                [g, h, j],
                [i, j, b]
            ];
            const min = Math.min(a, c, e, g, i);
            const pivot = arr.findIndex(([k]) => k == min);
            const cur = Number(([arr.slice(pivot), arr.slice(0, pivot)].flat(Infinity)).join(''));
            if (cur > max) {
                max = cur;
            }
        }
    }
    return max; // Just below the max safe integer in js
}