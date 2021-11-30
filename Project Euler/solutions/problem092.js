/*
Square digit chains

A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

For example,

44 → 32 → 13 → 10 → 1 → 1
85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop.
What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?

https://projecteuler.net/problem=92

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem92(n = 10000000) {
    let acc = 0;
    for (let i = 1; i < n; i++) {
        let temp = i;
        while (temp != 1 && temp != 89) {
            let temp2 = 0;
            for (let i of String(temp)) {
                temp2 += i ** 2;
            }
            temp = temp2;
        }
        if (temp == 89) {
            acc++;
        }
    }
    return acc;
}
