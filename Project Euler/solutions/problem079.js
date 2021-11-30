/*
Passcode derivation

A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.

The text file, keylog.txt, contains fifty successful login attempts.

Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.

https://projecteuler.net/problem=79

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem79(n = -1) {
    // Assuming that no numbers in the password repeat
    const before = Array.from({ length: 10 }, (_, i) => new Set());
    const after = Array.from({ length: 10 }, (_, i) => new Set());
    const attempts = keyLog.split("\n");
    for (let attempt of attempts) {
        const [a, b, c] = attempt.split("");
        after[a].add(b).add(c);
        after[b].add(c);
        before[c].add(b).add(a);
        before[b].add(a);
    }
    const after2 = after
        .map((x, i) => [i, x.size])
        .filter(([x, a]) => a || before[x].size > 0);
    after2.sort(([, a], [, b]) => b - a);
    // console.log(after2);
    // console.log(before);
    // console.log(after);
    return Number(after2.reduce((a, [b]) => a + b, ""));
}

const keyLog = `319
680
180
690
129
620
762
689
762
318
368
710
720
710
629
168
160
689
716
731
736
729
316
729
729
710
769
290
719
680
318
389
162
289
162
718
729
319
790
680
890
362
319
760
316
729
380
319
728
716`;
