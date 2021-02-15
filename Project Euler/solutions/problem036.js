/*
Double-base palindromes

The decimal number, 585 = 1001001001^^2 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

https://projecteuler.net/problem=36

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem36(n = 1000000) {
    let acc = 0;
    for (let i = 0; i < n; i++) {
        if (palindrome(i.toString()) && palindrome(i.toString(2))) {
            acc += i;
        }

    }
    return acc;
}

function palindrome(a) {
    for (let s = 0, e = a.length - 1; s <= e; s++, e--) {
        if (a[s] != a[e])
            return false;
    }
    return true;
}