/*
Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

https://projecteuler.net/problem=1

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem1(n = 1000) {
    let accumulator = 0;
    for (let i = 1; i < n; i++)
        if (i % 3 == 0 || i % 5 == 0)
            accumulator += i;
    return accumulator;
}
