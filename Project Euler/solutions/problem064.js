/*
Odd period square roots

All square roots are periodic when written as continued fractions and can be written in the form:

[Check the Website]

For example, let us consider root 23:

[Check the Website]

If we continue we would get the following expansion:

[Check the Website]

The process can be summarised as follows:

It can be seen that the sequence is repeating. For conciseness, we use the notation root 23 = [4;(1,3,1,8)],
to indicate that the block (1,3,1,8) repeats indefinitely.

The first ten continued fraction representations of (irrational) square roots are:

[Check the Website]

Exactly four continued fractions, for N <= 13, have an odd period.

How many continued fractions for N <= 10000 have an odd period?

https://projecteuler.net/problem=64

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem64(n = 10000) {
    let acc = 0;
    for (let i = 0; i < n; i++)
        if ((continuedFraction(i).length - 1) % 2 == 1)
            acc++;
    return acc;
}

function continuedFraction(i) {
    let sqrt = Math.sqrt(i);
    if (Number.isInteger(sqrt))
        return [];
    let m = 0;
    let d = 1;
    let a = Math.floor(sqrt);
    let list = [a];
    let a2 = a * 2;
    do {
        m = d * a - m;
        d = (i - m ** 2) / d;
        a = Math.floor((sqrt + m) / d);
        list.push(a);
    } while (a != a2);
    return list;
}

/*
{ // Always worried about losing precision when dealing with decimals.
    let acc = 0;
    for (let i = 0; i <= n; i++) {
        let approx = i;
        if (periodApproximation(approx) % 2) // Extremely inefficient, but works
            acc++;
        // if (i % 100 == 0)
        //     console.log('yup', i)
    }
    return acc;
}

function periodApproximation(n, p = 100) {
    p = Math.floor(Math.max(150, n / 30)); // Not that sure how the precision works.
    Decimal.set({
        precision: p
    });
    const one = new Decimal(1);
    n = new Decimal(n).sqrt();
    if (n.isInteger())
        return 0;
    let arr = new Set();
    let temp = 0;
    while (true) {
        // console.log(n)
        if (temp++ > p) {
            console.error([arr, [p, p / 10], arr.values().next().value ** 2]);
            throw 'The number of passes exceeded the estimated precision limit.'; // I actually had to use this.
        }
        let save = n.toString().slice(0, p / 10);
        if (arr.has(save)) {
            let i = 0;
            for (let x of arr) {
                if (x == save) {
                    // console.log(arr)
                    return arr.size - i;
                }
                i++;
            }
            console.log('failed')
            return;
        }
        if (n == 0) {
            console.log('Not irrational?')
            return arr.size;
        }
        arr.add(save);
        n = one.dividedBy(n.minus(n.floor()));
    }
}
*/