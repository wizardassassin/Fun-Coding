/*
Pandigital prime

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once.
For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?

https://projecteuler.net/problem=41

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import { isPrime } from "./dependency.js";

export default function problem41(n = 9) {
    let acc;
    while (n > 0) {
        let a = rec(n),
            b = a;
        do {
            if (isPrime(b))
                acc = b;
            b = nextLexicographicPermutation(b);
        } while (b != a);
        if (acc)
            break;
        n--;
    }
    return Number(acc);
}

function nextLexicographicPermutation(a) {
    a = String(a);
    let len = a.length,
        first,
        second;
    for (let s = len - 2; s >= 0; s--) {
        if (a[s] < a[s + 1]) {
            first = s;
            break;
        }
    }
    for (let s = first + 1; s < len; s++)
        if (a[s] > a[first] && (!second || a[s] < a[second]))
            second = s;
    a = swapAt(a, first, second);
    return a.slice(0, first + 1) + a.slice(first + 1).split('').sort().join('');
}

function swapAt(string, index1, index2) {
    if (index1 < 0 || index2 < 0)
        console.log('may not work with negative numbers')
    if (index1 > index2)
        [index1, index2] = [index2, index1];
    else if (index1 == index2)
        return string;
    return string.slice(0, index1) + string[index2] + string.slice(index1 + 1, index2) + string[index1] + string.slice(index2 + 1);
}

function rec(n = 1) {
    if (n <= 1)
        return 1;
    return rec(n - 1) + String(n);
} // Cool counter
