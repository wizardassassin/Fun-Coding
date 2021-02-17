/*
Champernowne's constant

An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If d_n represents the nth digit of the fractional part, find the value of the following expression.

d₁ × d₁₀ × d₁₀₀ × d₁₀₀₀ × d₁₀₀₀₀ × d₁₀₀₀₀₀ × d₁₀₀₀₀₀₀

https://projecteuler.net/problem=40

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

let str = "",
    num = 0;

export default function problem40(n = 6) {
    n = 10 ** n;
    while (str.length < n)
        str += String(++num);
    let acc = 1;
    while (n >= 1) {
        acc *= str[n - 1];
        n /= 10;
    }
    return acc;
}