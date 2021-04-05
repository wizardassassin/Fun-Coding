/*
Powerful digit counts

The 5-digit number, 16807=7^5, is also a fifth power. Similarly, the 9-digit number, 134217728=8^9, is a ninth power.

How many n-digit positive integers exist which are also an nth power?

https://projecteuler.net/problem=63

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem63(n = -1) {
    let acc = 0;
    for (let x = 1; x < 10; x++)
        for (let y = 1; - 1 <= y * (Math.log10(x) - 1); y++)
            acc++;
    return acc;
}

/*
for (let x = 0; x < 10; x++)
    for (let y = 0; - 1 <= y * (Math.log10(x) - 1); y++)
        if (String(x ** y).length == y)
            acc++;
*/