import fs from "fs";
import pkg from "lodash";
const _ = pkg;
import "dotenv/config";
import { performance } from "perf_hooks";

const wordsPath = process.env.WORD_LIST_PATH;

const compute = (path) => {
    const data = fs
        .readFileSync(path, "utf-8")
        .trim()
        .split("\n")
        .map((x) => x.trim().toLowerCase())
        .filter(
            (x) =>
                x.match(/[\W\d]/) === null &&
                x.length === 5 &&
                x.length === new Set(x).size
        )
        .sort();

    const sortData = data.map((x) => x.split("").sort().join(""));
    const setData = new Set(sortData);

    const data2 = data.filter((x, i) => true);

    const len2 = BigInt(data2.length);
    const len3 = len2 * (len2 - 1n) * (len2 - 2n) * (len2 - 4n) * (len2 - 5n);
    console.log(data2.length, len3, len2 ** 5n);
    return data2;
    return fs
        .readFileSync(path, "utf-8")
        .trim()
        .split("\n")
        .map((x) => x.trim().toLowerCase())
        .filter(
            (x) =>
                x.match(/[\W\d]/) === null &&
                x.length === 5 &&
                x.length === new Set(x).size
        )
        .sort();
};

const d1 = compute(wordsPath);
const d2 = compute("./temp_3.txt");

const d3 = d1.filter((x) => !d2.includes(x));
const d4 = d2.filter((x) => !d1.includes(x));

console.log(d3.length);
console.log(d4.length);

const s1 = new Set([...d1, ...d2]);

console.log(d1.length);
console.log(d2.length);
console.log(d4);
console.log(s1.size);

// debugger;
