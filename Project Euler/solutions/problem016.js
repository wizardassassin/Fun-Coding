/*
Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

https://projecteuler.net/problem=16
*/

export default function problem16(n = 1000) {
    return Array.from(String(2n ** BigInt(n)), Number).reduce(((acc, cur) => acc + cur));
}