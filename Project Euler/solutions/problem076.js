/*
Counting summations

It is possible to write five as a sum in exactly six different ways:

4 + 1
3 + 2
3 + 1 + 1
2 + 2 + 1
2 + 1 + 1 + 1
1 + 1 + 1 + 1 + 1

How many different ways can one hundred be written as a sum of at least two positive integers?

https://projecteuler.net/problem=76

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem76(n = 100) {
    let strip1 = new Array(n + 1);

    let strip2 = new Array();

    let i = 0;

    let k = 1;

    strip2[i] = (k * (3 * k - 1)) / 2;

    while (strip2[i] <= n) {
        k = -k;
        strip2[i + 1] = (k * (3 * k - 1)) / 2;
        k = -k + 1;
        strip2[i + 2] = (k * (3 * k - 1)) / 2;
        i += 2;
    }

    strip1[0] = 1n;

    for (let i = 1; i <= n; i++) {
        let val = 0n;
        let j;
        let k = 0;
        j = strip2[k++];
        while (j <= i) {
            if (Math.floor((k - 1) / 2) % 2 == 0) val += strip1[i - j];
            else val -= strip1[i - j];
            j = strip2[k++];
        }
        strip1[i] = val;
    }
    return Number(strip1[n]) - 1;
}
/*
const sum = Array.from({ length: n }, (x, i) => []);
for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i; j++) {
        let k = i - j;
        for (let l of sum[k]) {
            if (l[0] > j) {
                break;
            }
            sum[i].push(j + "");
        }
    }
    sum[i].push(i + 1 + "");
}

console.log(sum);
const sum = Array.from({ length: n }, (x, i) => []);
for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i; j++) {
        let k = i - j;
        for (let l of sum[k]) {
            if (l[0] > j) {
                break;
            }
            sum[i].push([j, ...l]);
        }
    }
    sum[i].push([i + 1]);
}
console.log(sum);
*/
