/*
Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

https://projecteuler.net/problem=14

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem14(n = 1000000) {
    let chain = 0,
        output = 0;
    for (let i = 1; i < n; i++) {
        let num = i,
            streak = 1;
        while (num > 1) {
            if (num % 2 == 0)
                num /= 2;
            else
                num = 3 * num + 1;
            streak++;
        }
        if (streak > chain) {
            chain = streak;
            output = i;
        }
    }
    return output;
}