/*
Reciprocal cycles

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2  =  0.5
1/3  =  0.(3)
1/4  =  0.25
1/5  =  0.2
1/6  =  0.1(6)
1/7  =  0.(142857)
1/8  =  0.125
1/9  =  0.(1)
1/10 =  0.1

Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

https://projecteuler.net/problem=26

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem26(n = 1000) {
    while (n > 0)
        if (FullReptendPrime(--n))
            return n;
    return -1;
}

function FullReptendPrime(n) { // Using the work of google and big brain
    let arr = Array.from({length: n - 1}, (_, a) => 10n ** BigInt(a + 1) % BigInt(n));
    return (new Set(arr).size == arr.length);
}

/* Bad Code
function repeatLength(n) {
    let mod = new Set(),
        prl = 0,
        crl, 
        val = 1;
    do {
        prl = crl;
        val = (val * 10) % n;
        mod.add(val);
        crl = mod.size;
    } while (prl < crl);
    return crl;
}
    if (n < 3)
        return -1;
    else if (n < 5)
        return 3;
    else {
        let b = n % 6;
        if (b == 0) {
            let c = n - 1;
            if (isPrime(c))
                return c;
            n -= 6;
        }
        n -= b;
        for (let i = n; i >= 6; i -= 6) {
            if (isPrime(i + 1))
                return i + 1;
            if (isPrime(i - 1))
                return i - 1;
        }

    }
    return -1;
*/
