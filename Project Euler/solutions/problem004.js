/*
Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

https://projecteuler.net/problem=4

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem4(n = 3) {
    let product = -1;
    n = Number('9'.repeat(n));
    let bottom = (n + 1) / 10;
    for (let i = n; i >= bottom; i--) {
        for (let ii = n; ii >= bottom; ii--) {
            let temporary = i * ii;
            if (temporary == String(temporary).split('').reverse().join('') && temporary > product) {
                product = temporary;
            }
        }
    }
    return product;
}