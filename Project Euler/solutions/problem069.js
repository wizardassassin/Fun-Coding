/*
Totient maximum

Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number of numbers less than n which
are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, φ(9)=6.

+====+==================+======+===========+
| n  | Relatively Prime | φ(n) |  n/φ(n)   |
+====+==================+======+===========+
|  2 |                1 |    1 |         2 |
+----+------------------+------+-----------+
|  3 |              1,2 |    2 |       1.5 |
+----+------------------+------+-----------+
|  4 |              1,3 |    2 |         2 |
+----+------------------+------+-----------+
|  5 |          1,2,3,4 |    4 |      1.25 |
+----+------------------+------+-----------+
|  6 |              1,5 |    2 |         3 |
+----+------------------+------+-----------+
|  7 |      1,2,3,4,5,6 |    6 | 1.1666... |
+----+------------------+------+-----------+
|  8 |          1,3,5,7 |    4 |         2 |
+----+------------------+------+-----------+
|  9 |      1,2,4,5,7,8 |    6 |       1.5 |
+----+------------------+------+-----------+
| 10 |          1,3,7,9 |    4 |       2.5 |
+----+------------------+------+-----------+

It can be seen that n=6 produces a maximum n/φ(n) for n ≤ 10.

Find the value of n ≤ 1,000,000 for which n/φ(n) is a maximum.

https://projecteuler.net/problem=69

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    primeSieve
} from "./dependency.js";

let primes;

export default function problem69(n = 1000000) {
    primes = primeSieve(n); // floating point errors should be fine
    let acc,
        val = 0;
    for (let i = 2; i < n; i++) {
        // if (i % 100000 == 0)
        //     console.log('yes' + i / 100000)
        let div = i / eulerTotient(i);
        // console.log(div)
        if (div > val)
            acc = i,
            val = div;
    }
    return acc;
}

function eulerTotient(a) {
    let acc = 1;
    let i = a;
    let j = 0;
    let fac = primes[j];
    while (a > 1) {
        if (a % fac == 0) {
            acc *= 1 - 1 / fac;
            do {
                a /= fac;
            } while (a % fac == 0);
        }
        fac = primes[++j];
    }
    return i * acc;
}

/*
function relativelyPrime(a, b) {
    return gcd(a, b) == 1;
}

function relativelyPrimeSum(a) {
    let acc = 0;
    for (let i = 0; i < a; i++)
        if (relativelyPrime(a, i))
            acc++;
    return acc;
}

Curr:
[Curr Code]
{
  Problem: '069',
  StartTime: '2.7980ms',
  Output: 510510,
  Answer: true,
  Runtime: '22834.0889ms'
}
Prev:
let acc = 1;
let i = 0;
while (primes[i] <= n) {
    if (n % primes[i] == 0)
        acc *= 1 - 1 / primes[i];
    i++;
}
return n * acc;
{
  Problem: '069',
  StartTime: '2.4058ms',
  Output: 510510,
  Answer: true,
  Runtime: '109863.7227ms'
}
*/