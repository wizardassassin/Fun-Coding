/*
Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

https://projecteuler.net/problem=5
*/

import { lcm } from 'mathjs'; // Who says I can't cheat?

export default function problem5(n = 20) {
    return lcm(...Array.from({length: n}, (_, i) => i + 1))
}