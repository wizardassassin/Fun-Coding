/*
Almost equilateral triangles

It is easily proved that no equilateral triangle exists with integral length sides and integral area. However, the almost equilateral triangle 5-5-6 has an area of 12 square units.

We shall define an almost equilateral triangle to be a triangle for which two sides are equal and the third differs by no more than one unit.

Find the sum of the perimeters of all almost equilateral triangles with integral side lengths and area and whose perimeters do not exceed one billion (1,000,000,000).

https://projecteuler.net/problem=94

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem94(n = 333333333) {
    return;
    let count = 0;
    for (let i = 300000000; i <= n; i++) {
        let side1 = i + 1;
        if (Number.isInteger(side1 * Math.sqrt(i ** 2 - (side1 / 2) ** 2))) {
            // console.log(i, "a");
            count += side1 * 3 + 1;
        }
        let side2 = i - 1;
        if (Number.isInteger(side2 * Math.sqrt(i ** 2 - (side2 / 2) ** 2))) {
            // console.log(i, "b");
            count += side2 * 3 - 1;
        }
    }
    return count;
}
