/*
Less brute force and more accurate math analysis.
Less optimizations.
More proof of concept.
*/

import fs from "fs";

import {
    performance
} from "perf_hooks";

import _ from "lodash";

import pkg from 'decimal.js';

const {
    Decimal
} = pkg;

const correctAdd = 15;
const incorrectSub = 30;
const fairRate = 0.5;
const cheatRate = 0.5;
const fairWeight = 0.5;
const cheatWeight = 0.75;

const output = [];
const outputMini = [];


for (let flips = 0; flips <= 20; flips++) {
    const susAcc = incorrectSub / (incorrectSub + correctAdd - flips);

    let useAcc = 0;
    const gamePlan = [];
    const fairChances = getChances(flips, fairWeight, 1 - fairWeight);
    const cheatChances = getChances(flips, cheatWeight, 1 - cheatWeight);

    for (let i = 0; i < fairChances.length; i++) {
        let plan;
        const fair = fairChances[i] * fairRate;
        const cheat = cheatChances[i] * cheatRate;
        if (fair > cheat) {
            plan = "Fair";
        } else if (cheat > fair) {
            plan = "Cheat";
        } else {
            plan = "Both";
        }
        useAcc += Math.max(fair, cheat);
        gamePlan.push(plan);
    }

    const susMargin = useAcc - susAcc;
    const isSus = useAcc >= susAcc;

    const tempOut = {
        flips,
        susAcc,
        useAcc,
        susMargin,
        isSus,
        gamePlan,
        fairChances,
        cheatChances,
    };
    const tempOutMini = {
        flips,
        susAcc,
        useAcc,
        susMargin,
        isSus,
        // gamePlan,
        // fairChances,
        // cheatChances,
    };

    output.push(tempOut);
    outputMini.push(tempOutMini);
}

console.log(outputMini);
fs.writeFileSync(`coin_flip_cheaters_v2_output.json`, JSON.stringify(output, null, 4));
fs.writeFileSync(`coin_flip_cheaters_v2_output_mini.json`, JSON.stringify(outputMini, null, 4));
output.sort((a, b) => b.susMargin - a.susMargin);
outputMini.sort((a, b) => b.susMargin - a.susMargin);
fs.writeFileSync(`coin_flip_cheaters_v2_output_sorted.json`, JSON.stringify(output, null, 4));
fs.writeFileSync(`coin_flip_cheaters_v2_output_sorted_mini.json`, JSON.stringify(outputMini, null, 4));
console.log(outputMini);
console.log(performance.now());

// Chances of 0 heads, 1 head, 2 heads, etc...
function getChances(flips, headChance, tailChance) {
    const retArr = Array.from({
        length: flips + 1
    }, () => 0);

    function recurse(numHeads, numFlips, probability) {
        if (numFlips == flips) {
            retArr[numHeads] += probability;
            return;
        }
        recurse(numHeads + 1, numFlips + 1, probability * headChance);
        recurse(numHeads, numFlips + 1, probability * tailChance);
    }

    recurse(0, 0, 1);

    return retArr;
}