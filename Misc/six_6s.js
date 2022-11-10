/**
 * Caveat, the order of operations is left to right regardless of the operation
 * There are some miniscule rounding errors
 *
 * https://puzzling.stackexchange.com/questions/97435/make-the-numbers-1-100-using-six-6s
 *
 * 2/3 === 0.666 repeating
 *
 * ",!+*RSSD" -> (sqrt((6!+6)*6)-(2/3)-(2/3))/(2/3) -> 97
 * ".-***D" -> (((2/3)-6)*6*6*6)/(2/3) -> -1728
 */

import fs from "fs";

const test = {};

const isInt = (val) => Number.isInteger(Number(val.toFixed(5)));

const isNeg = (val) => val < 0;

const fact = (val) => {
    if (val > 18) {
        return Number.MAX_SAFE_INTEGER * 1000;
    }
    let ret = 1;
    for (let i = 2; i <= val; i++) {
        ret *= i;
    }
    return ret;
};

function recurse(depth, num, val, moves, factNum, sqrtNum) {
    if (val > Number.MAX_SAFE_INTEGER) {
        return;
    }
    if (depth === 0) {
        if (!isInt(val)) {
            return;
        }
        test[val] ??= [];
        // if (test[val].length !== 0) {
        //     return;
        // }
        test[val].push(moves);
    }
    if (depth !== 0) {
        recurse(depth - 1, num, val + num, moves + "+", 0, 0);
        recurse(depth - 1, num, val - num, moves + "-", 0, 0);
        recurse(depth - 1, num, val * num, moves + "*", 0, 0);
        recurse(depth - 1, num, val / num, moves + "/", 0, 0);
        recurse(depth - 1, num, val + 2 / 3, moves + "A", 0, 0); // Hardcoded
        recurse(depth - 1, num, val - 2 / 3, moves + "S", 0, 0); // Hardcoded
        recurse(depth - 1, num, val * (2 / 3), moves + "M", 0, 0); // Hardcoded
        recurse(depth - 1, num, val / (2 / 3), moves + "D", 0, 0); // Hardcoded
    }
    if (factNum < 3 && isInt(val) && !isNeg(val)) {
        if (fact(Math.trunc(val)) !== val) {
            recurse(
                depth,
                num,
                fact(Math.trunc(val)),
                moves + "!",
                factNum + 1,
                sqrtNum
            );
        }
    }
    if (sqrtNum < 3 && !isNeg(val)) {
        if (Math.sqrt(val) !== val) {
            recurse(
                depth,
                num,
                Math.sqrt(val),
                moves + "R",
                factNum,
                sqrtNum + 1
            );
        }
    }
}

console.time("Recurse");
recurse(5, 6, 6, ",", 0);
recurse(5, 6, 2 / 3, ".", 0); // Hardcoded
console.timeEnd("Recurse");

console.time("Format");
const test2 = Object.entries(test).map(([a, b]) => [Number(a), b]);

test2.sort((a, b) => a[0] - b[0]);
console.timeEnd("Format");

// console.log(test2);

console.time("Write");
fs.writeFileSync("test2.json", JSON.stringify(test2, null, 4));
console.timeEnd("Write");

/*
Recurse: 13.854s
Format: 4.102ms
Write: 2.840s
*/
