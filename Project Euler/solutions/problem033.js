/*
Digit cancelling fractions

The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8,
which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

https://projecteuler.net/problem=33

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem33(n = 2) {
    let ratio = [1, 1];
    let e = 10 ** n,
        s = e / 10;
    for (let i = s; i < e; i++) {
        for (let j = i + 1; j < e; j++) {
            let d = String(j).split(''),
                n = String(i).split('');
            n.forEach(element => {
                if (d.includes(element)) {
                    let sd = d.filter((i) => i != element).join(''),
                        sn = n.filter((i) => i != element).join('');
                    if (i * sd == sn * j && sd > 0 && sn > 0 && i % 10 != 0 && j % 10 != 0) {
                        ratio[0] *= sn,
                            ratio[1] *= sd;
                    }
                }
            });
        }
    }
    return ratio[1] / gcd(ratio[0], ratio[1]);
}

function gcd(a, b) { // Euclid's algorithm??
    if (b == 0)
        return a;
    return gcd(b, a % b); // a mod b = a - b * Math.floor(a / b);
}

function lcd(a, b) { // some formula
    return Math.abs(a * b) / gcd(a, b);
}