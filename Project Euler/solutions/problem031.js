/*
Coin sums

In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).

It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

How many different ways can £2 be made using any number of coins?

https://projecteuler.net/problem=31

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem31(n = 200) { // uh oh...
    let acc = 0;
    for (let p200S = 0; p200S <= n; p200S += 200)
        for (let p100S = 0; p100S <= n; p100S += 100)
            for (let p50S = 0; p50S <= n; p50S += 50)
                for (let p20S = 0; p20S <= n; p20S += 20)
                    for (let p10S = 0; p10S <= n; p10S += 10)
                        for (let p5S = 0; p5S <= n; p5S += 5)
                            for (let p2S = 0; p2S <= n; p2S += 2)
                                for (let p1S = 0; p1S <= n; p1S += 1)
                                    if (p200S + p100S + p50S + p20S + p10S + p5S + p2S + p1S == 200)
                                        acc++;
    return acc;
}
