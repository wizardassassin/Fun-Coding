/*
Circular primes

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?

https://projecteuler.net/problem=35

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    isPrime
} from "mathjs";

export default function problem35(n = 1000000) {
    let acc = 0;
    if (n >= 2) // I'm just going to say that it's true
        acc++;
    if (n >= 3)
        acc++;
    for (let i = 6; i <= n; i += 6) {
        for (let j = i - 1; j <= i + 1; j += 2) {
            if (j > n)
                break;
            let temp = String(j),
                si = temp,
                all = true;
            do {
                if (!isPrime(temp)) {
                    all = false;
                    break;
                }
                temp = temp[temp.length - 1] + temp.slice(0, -1);
            } while (si != temp)
            if (all)
                acc++;
        }
    }
    return acc;
}