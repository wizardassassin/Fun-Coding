/*
Number letter counts

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
The use of "and" when writing out numbers is in compliance with British usage.

https://projecteuler.net/problem=17
*/
let a0to19 = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8],
    a20to90 = [6, 6, 5, 5, 5, 7, 6, 6],
    a100 = 7,
    a1000 = 8,
    and = 3;
export default function problem17(n = 1000) {
    let len = 0;
    for (let i = 1; i <= 1000; i++) {
        let a = Math.floor((i % 10000) / 1000),
            b = Math.floor((i % 1000) / 100),
            c = Math.floor((i % 100) / 10),
            d = i % 10;
        if (c < 2 && c >= 0) {
            len += a0to19[c * 10 + d];
        }
        if (c >= 2) {
            len += a20to90[c - 2];
            if (d > 0)
            len += a0to19[d];
        }
        if ((b > 0 || a > 0) && (d > 0 || c > 0)) {
            len += and;
        }
        if (b > 0) {
            len += a100 + a0to19[b];
        }
        if (a > 0) {
            len += a1000 + a0to19[a];
        }
    }
    return len;
}