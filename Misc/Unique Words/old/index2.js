import fs from "fs";
import pkg from "lodash";
const _ = pkg;
import "dotenv/config";
import { performance } from "perf_hooks";

const wordsPath = process.env.WORD_LIST_PATH;

console.log(wordsPath);

const data = fs
    .readFileSync(wordsPath, "utf-8")
    .trim()
    .split("\n")
    .map((x) => x.trim().toLowerCase())
    .filter(
        (x) =>
            x.match(/[\W\d]/) === null &&
            x.length === 5 &&
            x.length === new Set(x).size
    );

const dataLen = data.length;

const sortData = data.map((x) => x.split("").sort().join(""));
const setData = new Set(sortData);

const data2 = data.filter((_, i) => setData.delete(sortData[i]));
const arrData2 = data2.map((x) => x.split(""));

const combLen = data2.length;

const wordMappings = [];

for (let a = 0; a < dataLen; a++) {
    const word1 = data2[a];
    for (let b = a + 1; b < dataLen; b++) {
        const word2 = data2[b];
        // Stuff
    }
}

const formatNum = (num) => Number(num.toFixed(4));

const combo2 = [];

let start = 0;
let stop = 0;

let prevTime = 0;
const logData = (iter) => {
    const currTime = performance.now() - start;
    const time = (currTime * combLen) / iter;
    const iterTime = currTime - prevTime;
    prevTime = currTime;
    console.log({
        "Current Iter": iter,
        "Num Iters": combLen,
        "Percent Done": formatNum(iter / combLen),
        "Iter Time": formatNum(iterTime),
        "Current Time": formatNum(currTime),
        "Estimated Time": formatNum(time),
    });
};

start = performance.now();
console.log("Init:", Number(start.toFixed(4)));

const pair = [];

for (let a = 0; a < combLen; a++) {
    for (let b = a + 1; b < combLen; b++) {}
}

console.log(pair.length);

stop = performance.now();
console.log("Time:", Number((stop - start).toFixed(4)));

console.log(combo2);
