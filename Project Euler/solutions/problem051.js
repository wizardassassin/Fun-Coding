/*
Prime digit replacements

By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers,
yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.

https://projecteuler.net/problem=51

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    isPrime,
    nextPrime
} from "./dependency.js";

export default function problem51(n = 8) {
    n = 10 - n;
    let cur = 9;
    while (true) { // ignoring the "some" portion of the question
        cur = nextPrime(cur);
        let str = String(cur);
        let set = new Set(Array.from(str));
        for (let x of set) {
            if (x > n)
                break;
            let sAcc = 0;
            for (let i = x; i < 10; i++)
                if (!isPrime(str.replaceAll(x, i))) // ignoring the 24 => 04 and similar cases
                    if (++sAcc > n - x)
                        break;
            if (sAcc <= n - x)
                return cur;
        }
    }
}
/*
{
  Problem: '051',
  StartTime: '2.7702ms',
  Output: 121313,
  Answer: true,
  Runtime: '62.5611ms'
}
*/ // Haha I'm proud of myself. One big run, multiple small code snippet runs.