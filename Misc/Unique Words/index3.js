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

// Hotfix
data.push(...["abled", "false"]);
data.sort();
// Hotfix

const dataLen = data.length;

const sortData = data.map((x) => x.split("").sort().join(""));
const setData = new Set(sortData);

const data1 = new Set();
const data2 = [];
const data3 = {};
for (let i = 0; i < dataLen; i++) {
    const word = data[i];
    const sorted = sortData[i];
    if (setData.has(sorted) && !data1.has(sorted)) {
        data1.add(sorted);
        data2.push(word);
        data3[sorted] = [word];
    } else {
        data3[sorted].push(word);
    }
}
const arrData2 = data2.map((x) => x.split(""));

const combLen = data2.length;

console.log(sortData.length, setData.size, Object.entries(data3).length);

fs.writeFileSync("words1.json", JSON.stringify(data3, null, 4));
fs.writeFileSync(
    "unique_words.txt",
    Array.from(setData.values()).sort().join("\n")
);
