/*
Goldbach's other conjecture

It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

https://projecteuler.net/problem=46

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { isPrime } from "./dependency.js";

export default function problem46(n = 9) {
    if (n < 9)
        n = 9;
    if (n % 2 == 0)
        ++n;
    while (true) { // Super scary
        let square = 1;
        while (!isPrime(n - 2 * square ** 2)) { // Should (n - 2 * square ** 2) be put into a variable? Will it run faster?
            if (n - 2 * square ** 2 < 2)
                return n;
            square++;
        }
        do {
            n += 2;
        } while (isPrime(n));
    }
}
