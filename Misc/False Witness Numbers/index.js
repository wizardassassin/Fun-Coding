/**
 * This task was way harder than expected
 * Getting the program to be multithreaded was difficult
 * Creating a save state file was also hard
 * I should probably think of a solution for
 * having to copy and paste the worker_pool.js file
 * or functions already in different files
 * I got the idea from: https://www.youtube.com/watch?v=_MscGSN5J6o @ 13:16
 */

import WorkerPool from "./worker_pool.js";

import { cpus } from "os";

import fs from "fs";

import { performance } from "perf_hooks";

const pool = new WorkerPool(cpus().length);

const limit = 10000;

// let tempArray;

let tempTasks;

let cont = false;

let a = 0;

let b = 0;

let time;

const dir = fs.readdirSync("./");

if (dir.includes("save.json")) {
    [tempTasks, a, b, time] = JSON.parse(fs.readFileSync("./save.json"));
    cont = true;
}

if (!dir.includes("data")) {
    fs.mkdirSync("./data");
}

// const array = tempArray || Array.from({ length: limit }, (_, i) => [i, 0]);

const tasks = tempTasks || [];

const sieve = primeSieve(limit);

const step = 1000;

let i = 3;

console.log("Elapsed:", msFormat(performance.now()));

if (!cont) {
    while (i < limit) {
        tasks.push({
            start: i,
            stop: Math.min(i + step, limit),
        });
        a++;
        i += step;
    }
}

for (const t of tasks) {
    pool.runTask({ ...t, sieve }, callback);
}

if (tasks.length == 0) {
    printResults();
}

console.log("Elapsed:", msFormat(performance.now()));

console.log(Date());

function callback(err, { result, threadId, start, stop }) {
    if (err) {
        throw err;
    }
    b++;
    fs.writeFileSync(
        `./data/data${b}.json`,
        JSON.stringify({ start, stop, threadId, result })
    );
    tasks.splice(
        tasks.findIndex(({ start: st, stop: sp }) => st == start && sp == stop),
        1
    );
    fs.writeFileSync(
        "./save.json",
        JSON.stringify([tasks, a, b, performance.now() + (time || 0)])
    );
    console.log("Elapsed:", msFormat(performance.now()));
    console.log(Date());
    console.log("Iteration:", b, "threadId:", threadId);
    // array.reduce((a, b) => {
    //     if (a[1] < b[1]) return b;
    //     return a;
    // }),
    if (b == a) {
        printResults();
    }
}

function printResults() {
    console.log("Elapsed:", msFormat(performance.now()));

    console.log(Date());

    const data = fs.readdirSync("./data");

    const array = Array.from({ length: limit }, (_, i) => [i, 0]);

    for (const file of data) {
        const points = JSON.parse(fs.readFileSync(`./data/${file}`))
            .result.map((x) => x[1])
            .flat();
        for (const point of points) {
            array[point][1]++;
        }
    }

    array.sort((a, b) => b[1] - a[1]);

    console.log(array);

    fs.writeFileSync("./data.json", JSON.stringify(array));

    pool.close();

    console.log("Elapsed:", msFormat(performance.now()));

    console.log(Date());

    console.log(
        "Total Time:",
        msFormat(Math.floor(performance.now() + (time || 0)))
    );
}

function msFormat(time) {
    let milliseconds = Math.floor(time);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    return `${days}:${String(hours % 24).padStart(2, "0")}:${String(
        minutes % 60
    ).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}.${String(
        milliseconds % 1000
    ).padStart(3, "0")} (dd:hh:mm:ss.mmm)`;
}

function primeSieve(n) {
    const vect = Array(n + 1).fill(false);
    const primes = new Set();
    let p = 2,
        nn = Math.sqrt(n);
    while (p <= nn) {
        if (vect[p] == false) {
            primes.add(p);
            for (let i = p ** 2; i <= n; i += p) vect[i] = true;
        }
        p++;
    }
    while (p <= n) {
        if (vect[p] == false) primes.add(p);
        p++;
    }
    return primes;
}

// Contains an incorrect implimentation of powerMod
/*

console.time("Elapsed");

const limit = 10000;

const array = Array.from({ length: limit }, (_, i) => [i, 0]);

const sieve = primeSieve(limit);

console.timeLog("Elapsed");

for (let i = 3; i <= limit; i++) {
    if (sieve.has(i)) {
        continue;
    }
    liars(i);
    if (i % 1000 == 0)
        console.log(i);
}

console.timeLog("Elapsed");

array.sort((a, b) => b[1] - a[1]);

console.log(array);

console.timeEnd("Elapsed");

function liars(n) {
    let [s, d] = twos(n - 1);
    for (let i = 2; i < n - 1; i++) {
        let val = 1;
        for (let j = 0; j < s; j++) {
            val = powerMod(val, i, d, n);
            if (val == 1 || val == n - 1) {
                array[i][1]++;
                break;
            }
        }
    }
}

function powerMod(v, a, d, n) {
    for (let i = 0; i < d; i++) {
        v *= a;
        v %= n;
    }
    return v;
}

function twos(n) {
    let i = 0;
    while (n % 2 == 0) {
        n /= 2;
        i++;
    }
    return [i, n];
}

function primeSieve(n) {
    const vect = Array(n + 1).fill(false);
    const primes = new Set();
    let p = 2,
        nn = Math.sqrt(n);
    while (p <= nn) {
        if (vect[p] == false) {
            primes.add(p);
            for (let i = p ** 2; i <= n; i += p) vect[i] = true;
        }
        p++;
    }
    while (p <= n) {
        if (vect[p] == false) primes.add(p);
        p++;
    }
    return primes;
}

*/
