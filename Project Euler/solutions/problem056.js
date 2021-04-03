/*
Powerful digit sum

A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large:
one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, ab, where a, b < 100, what is the maximum digital sum?

https://projecteuler.net/problem=56

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem56(n = 100n) {
    let big = -1;
    for (let i = 1n; i < n; i++) { // 0 is weird and somewhat trivial
        for (let j = 1n; j < n; j++) {
            let sum = [...String(i ** j)].reduce((a, b) => a + Number(b), 0);
            if (sum > big)
                big = sum;
        }
    }
    return big;
}