/*
Right triangles with integer coordinates

The points P (x1, y1) and Q (x2, y2) are plotted at integer co-ordinates and are joined to the origin, O(0,0), to form ΔOPQ.

[Image Here]

There are exactly fourteen triangles containing a right angle that can be formed when each co-ordinate lies between 0 and 2 inclusive; that is,
0 ≤ x1, y1, x2, y2 ≤ 2.

[Image Here]

Given that 0 ≤ x1, y1, x2, y2 ≤ 50, how many right triangles can be formed?

https://projecteuler.net/problem=91

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

/*
γ  = cos⁻¹((a²+b²-c²)/(2ab))
90 = cos⁻¹((a²+b²-c²)/(2ab))
0  = (a²+b²-c²)/(2ab)
0  = (a²+b²-c²)

a²+b²=c²
a²+b²=c²
a²+b²-c²=0
*/
export default function problem91(n = 50) {
    n += 1;
    let count = 0;
    const points = n ** 2;
    for (let i = 0; i < points; i++) {
        let x2 = i % n;
        let y2 = n - 1 - Math.floor(i / n);
        if (x2 == 0 && y2 == 0) {
            continue;
        }
        for (let j = i + 1; j < points; j++) {
            let x3 = j % n;
            let y3 = n - 1 - Math.floor(j / n);
            if (x3 == 0 && y3 == 0) {
                continue;
            }
            let a = x2 ** 2 + y2 ** 2;
            let b = x3 ** 2 + y3 ** 2;
            let c = (x3 - x2) ** 2 + (y3 - y2) ** 2;
            let max = Math.max(a, b, c); // c
            let min = Math.min(a, b, c); // a
            let mid = a + b + c - max - min; // b
            if (max - min - mid == 0) {
                count++;
            }
        }
    }
    return count;
}

/*
if (
    max - min - mid == 0
    // x3 + y2 == 0 ||
    // x3 ** 2 + y3 ** 2 == x2 * y3 + y2 * y3 ||
    // x2 ** 2 + y2 ** 2 == x2 * y3 + y2 * y3
) {
    // console.log(x2, y2, x3, y3, "b", a, b, c, "c", max, mid, min);
    count++;
} else {
    // console.log("a", x2, y2, x3, y3, "b", a, b, c, "c", max, mid, min);
}
*/
