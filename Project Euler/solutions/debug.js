import {
    performance
} from "perf_hooks";

import answers from "./answers.js";

const problem = Number(process.argv[2]) || 1, // Problem 0 does not exist
    digits = 3,
    Problem = '0'.repeat(digits - String(problem).length) + problem,
    debug = await import(`./problem${Problem}.js`).catch((res) => { // Dynamic imports!! YAY
        throw res;
    }), // Someone correct me if this implementation of .catch() is wrong!
    start = performance.now(),
    StartTime = start.toFixed(4) + "ms",
    Output = debug.default(),
    Answer = (Output == answers[Number(Problem) - 1]) ? true : answers[Number(Problem) - 1],
    Runtime = (performance.now() - start).toFixed(4) + "ms", // Cool
    obj = {
        Problem,
        StartTime,
        Output,
        Answer,
        Runtime
    };

console.log(obj);
console.log(Object.getOwnPropertyNames(obj).length, "5");