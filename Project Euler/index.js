// Ripped a lot of this code off from the nodejs website:
// https://nodejs.org/api/async_hooks.html#async-resource-worker-pool

import {
    performance
} from "perf_hooks";

const start = performance.now();

import WorkerPool from './worker_pool.js';

import {
    cpus
} from 'os';

import fs from "fs";

import answers from './solutions/answers.js';

const pool = new WorkerPool(cpus().length);

const arr = [];

let max = 60;
let digits = 3;

let StartTime;
let finished = 0;
for (let i = 0; i < max; i++) {
    pool.runTask({
        Problem: '0'.repeat(digits - String(i + 1).length) + (i + 1),
        answer: answers[i]
    }, (err, result) => {
        if (err) {
            throw err;
        }
        arr.push(result)
        console.log(result);
        if (++finished === max) {
            pool.close();
            arr.sort((a, b) => a.Problem - b.Problem);
            fs.writeFileSync('./data.json', JSON.stringify(arr));
            console.log({
                StartTime,
                Runtime: (performance.now() - start).toFixed(4)
            });
        }
    });
}
StartTime = (performance.now() - start).toFixed(4);
console.log("StartTime: " + StartTime);

/*
const time = Date.now();
import * as problem from "./solutions/index.js"; // It takes such a long time to load this :(
import answers from "./solutions/answers.js"
let arr = Array();
let a = 0;
for (let i in problem) {
    let start = Date.now();
    let result = problem[i]();
    arr.push([result, (result == answers[a]) ? true : answers[a], Date.now() - start, Date.now() - time]);
    a++;
}
console.table(arr);
console.log(["Problem - 1", "Output", "Answer", "Duration", "Elapsed"]);
// Try to make this async and use dynamic imports
*/