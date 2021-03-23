/*
Permuted multiples

It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

https://projecteuler.net/problem=52

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem52(n = 5) {
    let val = 0,
        count = 0;
    do {
        count = 0;
        let a = String(++val).split('').sort().join('');
        for (let i = 2; i < 7; i++)
            if (String(val * i).split('').sort().join('') === a)
                count++;
    } while (count < n);
    return val;
}
