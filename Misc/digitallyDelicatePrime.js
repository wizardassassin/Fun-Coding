// Video I got the idea from: https://www.youtube.com/watch?v=p3Khnx0lUDE
// Simple program that just finds digitally delicate primes up to a value.
// Not sure how efficient this is

/*
import * as fs from "fs";
// Apparently I had a file with prime numbers on my computer
let reference = fs.readFileSync("./PrimeSieve.dat", "utf-8").slice(0, 1000000);

reference = reference.slice(0, reference.lastIndexOf(" ")).split(" ").map(Number);
*/

import { performance } from "perf_hooks";

const start = performance.now();

let n = 10000000; // max value to check

// Just grabbed the code from the dependency file
const vect = Array(n + 1).fill(false);
const reference = Array();
let p = 2,
    nn = Math.sqrt(n);
while (p <= nn) {
    if (vect[p] == false) {
        reference.push(p);
        for (let i = p ** 2; i <= n; i += p) vect[i] = true;
    }
    p++;
}
while (p <= n) {
    if (vect[p] == false) reference.push(p);
    p++;
}

const referenceSet = new Set(reference);

for (const prime of reference) {
    if (comboHasPrime(prime)) continue;
    console.log(prime);
}

function comboHasPrime(num) {
    const numString = String(num);
    for (let i = numString.length - 1; i >= 0; i--) {
        const val = Number(numString[i]);
        const numLeft = numString.slice(0, i);
        const numRight = numString.slice(i + 1);
        for (let j = 0; j < val; j++) {
            if (referenceSet.has(Number(numLeft + j + numRight))) return true;
        }
        for (let j = val + 1; j < 10; j++) {
            if (referenceSet.has(Number(numLeft + j + numRight))) return true;
        }
    }
    return false;
}

const stop = performance.now();

const total = stop - start;

console.log("Elapsed Time(ms):");
console.log(total);
