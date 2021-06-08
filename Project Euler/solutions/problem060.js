/*
Prime pair sets

The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime.
For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

https://projecteuler.net/problem=60

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import {
    primeSieve
} from "./dependency.js";

import { isPrime } from "mathjs";

export default function problem60(n = -1) { // Cache primes, check all combinations, repeat
    let limit = 20000;
    const primes = primeSieve(limit).map(String);
    // There might be something better than this
    let f = primes.length;
    let acc = Infinity;
    for (let a = 0; a < f; a++) {
        if ((Number(primes[a])) * 5 >= acc)
            break;
        let aa = primes[a];
        let aaa = Number(aa);
        // console.log('yes' + a)
        for (let b = a + 1; b < f; b++) {
            if ((aaa + Number(primes[b])) * 2.5 >= acc)
                break;
            if (!pair(aa, primes[b]))
                continue;
            let bb = primes[b];
            let bbb = aaa + Number(bb);
            for (let c = b + 1; c < f; c++) {
                if ((bbb + Number(primes[c])) * 1.25 >= acc)
                    break;
                if (!pair(aa, primes[c]) || !pair(bb, primes[c]))
                    continue;
                let cc = primes[c];
                let ccc = bbb + Number(cc);
                for (let d = c + 1; d < f; d++) {
                    if ((ccc + Number(primes[d])) * 0.625 >= acc)
                        break;
                    if (!pair(aa, primes[d]) || !pair(bb, primes[d]) || !pair(cc, primes[d]))
                        continue;
                    let dd = primes[d];
                    let ddd = ccc + Number(dd);
                    for (let e = d + 1; e < f; e++) {
                        if ((ddd + Number(primes[e])) * 0.3125 >= acc)
                            break;
                        if (!pair(aa, primes[e]) || !pair(bb, primes[e]) || !pair(cc, primes[e]) || !pair(dd, primes[e]))
                            continue;
                        if (acc > ddd + Number(primes[e]))
                            acc = ddd + Number(primes[e]);
                        // console.log(acc)
                        break;
                    }
                }
            }
        }
    }
    return acc;
}

function pair(a, b) {
    return isPrime(a + b) && isPrime(b + a)
}

// 65.9718916 seconds using created isPrime
// 27.9891343 seconds using mathjs isPrime