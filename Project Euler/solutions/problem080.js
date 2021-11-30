/*
Square root digital expansion

It is well known that if the square root of a natural number is not an integer, then it is irrational. The decimal expansion of such square roots is infinite without any repeating pattern at all.

The square root of two is 1.41421356237309504880..., and the digital sum of the first one hundred decimal digits is 475.

For the first one hundred natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.

https://projecteuler.net/problem=80

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import Decimal from "decimal.js";

import { digitSum } from "./dependency.js";

Decimal.set({ precision: 110 });

export default function problem80(n = 100) {
    let acc = 0;
    for (let i = 1; i <= 100; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            continue;
        }
        let sqrt = new Decimal(i).sqrt().toString();
        let index = sqrt.indexOf(".");
        sqrt = sqrt.slice(0, index) + sqrt.slice(index + 1);
        // sqrt = sqrt.slice(sqrt.indexOf(".") + 1);
        sqrt = sqrt.slice(0, 100);
        // console.log(sqrt);
        acc += digitSum(sqrt);
    }
    return acc;
}
