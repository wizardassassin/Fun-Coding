/*
Non-abundant sums

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.
By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.
However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number
that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

https://projecteuler.net/problem=23

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem23(n = 28123) {
    let vec = []; // If there's anything faster than arrays in JavaScript, let me know
    for (let x = 0; x <= n; x++) {
        if (x == 0 || x == 1)
            continue;
        let acc = 1,
            e = Math.sqrt(x);
        for (let i = 2; i <= e; i++) {
            if (!(x % i))
                acc += i + x / i;
        }
        if (Number.isInteger(e))
            acc -= e;
        if (x < acc)
            vec.push(x);
    };
    let vec2 = new Set();
    for (let i = 0, ei = vec.length; i < ei; i++)
        for (let j = i; j < ei; j++) {
            let a = vec[i] + vec[j]
            if (!(a > n))
                vec2.add(a);
        }
    let sums = 0;
    vec2.forEach(x => sums += x);

    return (n * (n + 1)) / 2 - sums;
}