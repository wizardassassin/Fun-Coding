/*
Sum square difference

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
3025 - 385 = 2640
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

https://projecteuler.net/problem=6
*/

import { sum } from 'mathjs'; // Who says I can't cheat?

export default function problem6(n = 100) {
    let sums = sum(Array.from({length: n}, (_, i) => (i + 1) ** 2)),
        square = ((n + 1) * n / 2) ** 2;
    return square - sums;
}