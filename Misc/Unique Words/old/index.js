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

const sortData = data.map((x) => x.split("").sort().join(""));
const setData = new Set(sortData);

const data2 = data.filter((_, i) => setData.delete(sortData[i]));
const arrData2 = data2.map((x) => x.split(""));
const setData2 = data2.map((x) => new Set(x));

const combinedArr = data2.map((_, i) => ({
    str: data2[i],
    arr: arrData2[i],
    set: setData2[i],
}));

const combLen = combinedArr.length;

const combinedMap = new Map();

for (const { str, arr, set } of combinedArr) {
    combinedMap.set(str, { arr, set });
}

const combo = [];

for (const comb of combinedArr) {
    combo.push(_.cloneDeep(comb.arr));
    break;
}

const formatNum = (num) => Number(num.toFixed(4));

const combo2 = [];

let start;
let stop;

start = performance.now();
console.log("Init:", Number(start.toFixed(4)));

for (let a = 0; a < combLen; a++) {
    const currTime = performance.now() - start;
    const time = (currTime * combLen) / a;
    console.log({
        "Current Iter": a,
        "Num Iters": combLen,
        "Percent Done": formatNum(a / combLen),
        "Current Time": formatNum(currTime),
        "Estimated Time": formatNum(time),
    });

    const arr1 = [...arrData2[a]];
    const set1 = new Set(arr1);
    for (let b = a + 1; b < combLen; b++) {
        if (arrData2[b].every((x) => !set1.has(x))) {
            const arr2 = [...arr1, ...arrData2[b]];
            const set2 = new Set(arr2);
            for (let c = b + 1; c < combLen; c++) {
                if (arrData2[c].every((x) => !set2.has(x))) {
                    const arr3 = [...arr2, ...arrData2[c]];
                    const set3 = new Set(arr3);
                    for (let d = c + 1; d < combLen; d++) {
                        if (arrData2[d].every((x) => !set3.has(x))) {
                            const arr4 = [...arr3, ...arrData2[d]];
                            const set4 = new Set(arr4);
                            for (let e = d + 1; e < combLen; e++) {
                                if (arrData2[e].every((x) => !set4.has(x))) {
                                    const arr5 = [...arr4, ...arrData2[d]];
                                    const set5 = new Set(arr5);
                                    console.log(arr5);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const currTime = performance.now() - start;
const time = (currTime * combLen) / a;
console.log({
    "Current Iter": a,
    "Num Iters": combLen,
    "Percent Done": formatNum(a / combLen),
    "Current Time": formatNum(currTime),
    "Estimated Time": formatNum(time),
});

stop = performance.now();
console.log("Time:", Number((stop - start).toFixed(4)));

console.log(combo2);

debugger;
