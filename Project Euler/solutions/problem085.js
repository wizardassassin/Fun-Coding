/*
Counting rectangles

By counting carefully it can be seen that a rectangular grid measuring 3 by 2 contains eighteen rectangles:

Although there exists no rectangular grid that contains exactly two million rectangles, find the area of the grid with the nearest solution.

https://projecteuler.net/problem=85

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

// x by y -> (x C 2) * (y C 2)
// rectangles = x(x-1)y(y-1)/4 (if x and y are lines)
// x(x+1)y(y+1)/4 (if x and y are the individual squares)
export default function problem85(n = 2000000) {
    let min = n;
    let xy = 0;
    for (let x = 0; x < 100; x++) {
        for (let y = x; y < 100; y++) {
            let dist = Math.abs((x * (x + 1) * y * (y + 1)) / 4 - n);
            if (dist < min) {
                min = dist;
                xy = x * y;
            }
        }
    }
    return xy;
}
