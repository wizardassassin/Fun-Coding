/*
Number spiral diagonals

Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.
https://projecteuler.net/problem=28

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem28(n = 1001) {
    n = (n - 1) / 2;
    return 2 * (8 * n ** 3 + 15 * n ** 2 + 13 * n + 6) / 3 - 3; // Pulled out big brain for this, then realized the inputs were [row length] instead of ["square" count - 1]
}
