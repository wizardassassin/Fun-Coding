/*
Cuboid route

A spider, S, sits in one corner of a cuboid room, measuring 6 by 5 by 3, and a fly, F, sits in the opposite corner.
By travelling on the surfaces of the room the shortest "straight line" distance from S to F is 10 and the path is shown on the diagram.

[Image]

However, there are up to three "shortest" path candidates for any given cuboid and the shortest route doesn't
always have integer length.

It can be shown that there are exactly 2060 distinct cuboids, ignoring rotations, with integer dimensions,
up to a maximum size of M by M by M, for which the shortest route has integer length when M = 100. This is
the least value of M for which the number of solutions first exceeds two thousand; the number of solutions when M = 99 is 1975.

Find the least value of M such that the number of solutions first exceeds one million.

https://projecteuler.net/problem=86

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

// https://en.wikipedia.org/wiki/Coprime_integers#Generating_all_coprime_pairs
// https://en.wikipedia.org/wiki/Pythagorean_triple

export default function problem86(max = 200) {
    let m = 2;
    let n = 1;
    let sum = 0;
    const b1 = branchOne();
    const b2 = branchTwo();
    const b3 = branchThree();

    let a = m ** 2 - n ** 2;
    let b = 2 * m * n;
    console.log({ m, n, a, b });
    console.log(getState(a, b, max));

    for (let ind = 0; ind < 20; ind++) {
        [m, n] = b1.next().value;
        a = m ** 2 - n ** 2;
        b = 2 * m * n;
        console.log({ m, n, a, b });
        console.log(getState(a, b, max));
    }
    for (let ind = 0; ind < 20; ind++) {
        [m, n] = b2.next().value;
        a = m ** 2 - n ** 2;
        b = 2 * m * n;
        console.log({ m, n, a, b });
        console.log(getState(a, b, max));
    }
    for (let ind = 0; ind < 20; ind++) {
        [m, n] = b3.next().value;
        a = m ** 2 - n ** 2;
        b = 2 * m * n;
        console.log({ m, n, a, b });
        console.log(getState(a, b, max));
    }
}

/**
 * Computes the valid
 * @param {number} m - An integer.
 * @param {number} n - An integer.
 */
function compute(m, n) {}

/**
 * Determines the state of the triangle fitting inside the cuboid.
 * @param {number} a - The first side length of the triangle.
 * @param {number} b - The second side length of the triangle.
 * @param {number} max - The max side length for each side of the cuboid.
 * @returns {{isValidAB: boolean, isValidBA: boolean}} The state of the triangle.
 */
function getState(a, b, max) {
    let isValidAB = a <= max && b <= 2 * max;
    let isValidBA = b <= max && a <= 2 * max;
    return { isValidAB, isValidBA };
}

/**
 * Computes the next coprime pair for (m, n) where m > n (Branch One).
 * @param {number} m - An even integer.
 * @param {number} n - An odd integer.
 */
function* branchOne(m = 2, n = 1) {
    while (true) {
        [m, n] = [2 * m - n, m];
        yield [m, n];
    }
}

/**
 * Computes the next coprime pair for (m, n) where m > n (Branch Two).
 * @param {Number} m - An even integer.
 * @param {Number} n - An odd integer.
 */
function* branchTwo(m = 2, n = 1) {
    while (true) {
        [m, n] = [2 * m + n, m];
        yield [m, n];
    }
}

/**
 * Computes the next coprime pair for (m, n) where m > n (Branch Three).
 * @param {Number} m - An even integer.
 * @param {Number} n - An odd integer.
 */
function* branchThree(m = 2, n = 1) {
    while (true) {
        [m, n] = [m + 2 * n, n];
        yield [m, n];
    }
}


/*
max = 200;
let m = 2;
let n = 1;

{ m: 2, n: 1, a: 3, b: 4 }
{ isValidAB: true, isValidBA: true }
{ m: 3, n: 2, a: 5, b: 12 }
{ isValidAB: true, isValidBA: true }
{ m: 4, n: 3, a: 7, b: 24 }
{ isValidAB: true, isValidBA: true }
{ m: 5, n: 4, a: 9, b: 40 }
{ isValidAB: true, isValidBA: true }
{ m: 6, n: 5, a: 11, b: 60 }
{ isValidAB: true, isValidBA: true }
{ m: 7, n: 6, a: 13, b: 84 }
{ isValidAB: true, isValidBA: true }
{ m: 8, n: 7, a: 15, b: 112 }
{ isValidAB: true, isValidBA: true }
{ m: 9, n: 8, a: 17, b: 144 }
{ isValidAB: true, isValidBA: true }
{ m: 10, n: 9, a: 19, b: 180 }
{ isValidAB: true, isValidBA: true }
{ m: 11, n: 10, a: 21, b: 220 }
{ isValidAB: true, isValidBA: false }
{ m: 12, n: 11, a: 23, b: 264 }
{ isValidAB: true, isValidBA: false }
{ m: 13, n: 12, a: 25, b: 312 }
{ isValidAB: true, isValidBA: false }
{ m: 14, n: 13, a: 27, b: 364 }
{ isValidAB: true, isValidBA: false }
{ m: 15, n: 14, a: 29, b: 420 }
{ isValidAB: false, isValidBA: false }
{ m: 16, n: 15, a: 31, b: 480 }
{ isValidAB: false, isValidBA: false }
{ m: 17, n: 16, a: 33, b: 544 }
{ isValidAB: false, isValidBA: false }
{ m: 18, n: 17, a: 35, b: 612 }
{ isValidAB: false, isValidBA: false }
{ m: 19, n: 18, a: 37, b: 684 }
{ isValidAB: false, isValidBA: false }
{ m: 20, n: 19, a: 39, b: 760 }
{ isValidAB: false, isValidBA: false }
{ m: 21, n: 20, a: 41, b: 840 }
{ isValidAB: false, isValidBA: false }
{ m: 22, n: 21, a: 43, b: 924 }
{ isValidAB: false, isValidBA: false }

{ m: 5, n: 2, a: 21, b: 20 }
{ isValidAB: true, isValidBA: true }
{ m: 12, n: 5, a: 119, b: 120 }
{ isValidAB: true, isValidBA: true }
{ m: 29, n: 12, a: 697, b: 696 }
{ isValidAB: false, isValidBA: false }
{ m: 70, n: 29, a: 4059, b: 4060 }
{ isValidAB: false, isValidBA: false }
{ m: 169, n: 70, a: 23661, b: 23660 }
{ isValidAB: false, isValidBA: false }
{ m: 408, n: 169, a: 137903, b: 137904 }
{ isValidAB: false, isValidBA: false }
{ m: 985, n: 408, a: 803761, b: 803760 }
{ isValidAB: false, isValidBA: false }
{ m: 2378, n: 985, a: 4684659, b: 4684660 }
{ isValidAB: false, isValidBA: false }
{ m: 5741, n: 2378, a: 27304197, b: 27304196 }
{ isValidAB: false, isValidBA: false }
{ m: 13860, n: 5741, a: 159140519, b: 159140520 }
{ isValidAB: false, isValidBA: false }
{ m: 33461, n: 13860, a: 927538921, b: 927538920 }
{ isValidAB: false, isValidBA: false }
{ m: 80782, n: 33461, a: 5406093003, b: 5406093004 }
{ isValidAB: false, isValidBA: false }
{ m: 195025, n: 80782, a: 31509019101, b: 31509019100 }
{ isValidAB: false, isValidBA: false }
{ m: 470832, n: 195025, a: 183648021599, b: 183648021600 }
{ isValidAB: false, isValidBA: false }
{ m: 1136689, n: 470832, a: 1070379110497, b: 1070379110496 }
{ isValidAB: false, isValidBA: false }
{ m: 2744210, n: 1136689, a: 6238626641379, b: 6238626641380 }
{ isValidAB: false, isValidBA: false }
{ m: 6625109, n: 2744210, a: 36361380737781, b: 36361380737780 }
{ isValidAB: false, isValidBA: false }
{ m: 15994428, n: 6625109, a: 211929657785303, b: 211929657785304 }
{ isValidAB: false, isValidBA: false }
{ m: 38613965, n: 15994428, a: 1235216565974041, b: 1235216565974040 }
{ isValidAB: false, isValidBA: false }
{ m: 93222358, n: 38613965, a: 7199369738058939, b: 7199369738058940 }
{ isValidAB: false, isValidBA: false }

{ m: 4, n: 1, a: 15, b: 8 }
{ isValidAB: true, isValidBA: true }
{ m: 6, n: 1, a: 35, b: 12 }
{ isValidAB: true, isValidBA: true }
{ m: 8, n: 1, a: 63, b: 16 }
{ isValidAB: true, isValidBA: true }
{ m: 10, n: 1, a: 99, b: 20 }
{ isValidAB: true, isValidBA: true }
{ m: 12, n: 1, a: 143, b: 24 }
{ isValidAB: true, isValidBA: true }
{ m: 14, n: 1, a: 195, b: 28 }
{ isValidAB: true, isValidBA: true }
{ m: 16, n: 1, a: 255, b: 32 }
{ isValidAB: false, isValidBA: true }
{ m: 18, n: 1, a: 323, b: 36 }
{ isValidAB: false, isValidBA: true }
{ m: 20, n: 1, a: 399, b: 40 }
{ isValidAB: false, isValidBA: true }
{ m: 22, n: 1, a: 483, b: 44 }
{ isValidAB: false, isValidBA: false }
{ m: 24, n: 1, a: 575, b: 48 }
{ isValidAB: false, isValidBA: false }
{ m: 26, n: 1, a: 675, b: 52 }
{ isValidAB: false, isValidBA: false }
{ m: 28, n: 1, a: 783, b: 56 }
{ isValidAB: false, isValidBA: false }
{ m: 30, n: 1, a: 899, b: 60 }
{ isValidAB: false, isValidBA: false }
{ m: 32, n: 1, a: 1023, b: 64 }
{ isValidAB: false, isValidBA: false }
{ m: 34, n: 1, a: 1155, b: 68 }
{ isValidAB: false, isValidBA: false }
{ m: 36, n: 1, a: 1295, b: 72 }
{ isValidAB: false, isValidBA: false }
{ m: 38, n: 1, a: 1443, b: 76 }
{ isValidAB: false, isValidBA: false }
{ m: 40, n: 1, a: 1599, b: 80 }
{ isValidAB: false, isValidBA: false }
{ m: 42, n: 1, a: 1763, b: 84 }
{ isValidAB: false, isValidBA: false }
*/