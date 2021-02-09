/*
Amicable numbers

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

https://projecteuler.net/problem=21

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem21(n = 10000) {
    let acc = 0;
    for (let i = 1; i < n; i++) {
        let val1 = 0,
            val2 = 0;
        for (let j = 1, end = Math.sqrt(i); j <= end; j++) {
            if (i % j == 0 && i != j) {
                val1 += j;
                let temp = i / j;
                if (temp != j && temp != i)
                    val1 += temp;
            }
        }
        if (val1 == i)
            continue;
        for (let j = 1, end = Math.sqrt(val1); j <= end; j++) {
            if (val1 % j == 0 && val1 != j) {
                val2 += j;
                let temp = val1 / j;
                if (temp != j && temp != val1)
                    val2 += temp;
            }
        }
        if (val2 == i)
            acc += val1;
    }
    return acc;
}
