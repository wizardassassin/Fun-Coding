import fs from "fs";

import {
    performance
} from "perf_hooks";

import _ from "lodash";

import pkg from 'decimal.js';

/*
Video: https://www.youtube.com/watch?v=QC91Bf8hQVo
*/

/*
Notes:
Solving by brute force lol.

*/

const {
    Decimal
} = pkg;

const config = {
    simulations: 1000000, // Number of tests to run
    flipCount: 15, // Number of flips for each simulation
    startingCoins: 100, // Starting amount of coin flips
    correctCoins: 15, // Coin flips for each correct guess
    incorrectCoins: 30, // Coin flips lost for each incorrect guess
    fairProbability: 0.5, // The bias a non-cheater has (0.5 = no bias)
    cheatProbability: 0.75, // The bias a cheater has
    cheaterChance: 0.5, // Chance of a cheater occuring
}

const testOutput = {
    fairOutput: Array.from({
        length: config.flipCount
    }, (x, i) => Array.from({
        length: config.simulations
    })),
    cheatOutput: Array.from({
        length: config.flipCount
    }, (x, i) => Array.from({
        length: config.simulations
    })),
}

const stats = {
    fairOutput: [],
    cheatOutput: [],
}

const stats2 = {
    fairOutput: [],
    cheatOutput: [],
}

const stats3 = {
    fairOutput: [],
    cheatOutput: [],
}

console.log("Init Duration:", performance.now());
console.log("Starting...");
const start = performance.now();
test();
getStats();
getStats2();
getStats3();
const end = performance.now();
const duration = end - start;
console.log("Run Duration:", duration, "ms");
console.log("Ending...");

// console.log(testOutput);
// console.log(stats.fairOutput);
// console.log(stats.cheatOutput);

// Raw Data, Analysis 1, Analysis 2, Analysis 3
fs.writeFileSync(`coin_flip_cheaters_test_output.json`, JSON.stringify(testOutput));
fs.writeFileSync(`coin_flip_cheaters_stats.json`, JSON.stringify(stats, null, 4));
fs.writeFileSync(`coin_flip_cheaters_stats2.json`, JSON.stringify(stats2, null, 4));
fs.writeFileSync(`coin_flip_cheaters_stats3.json`, JSON.stringify(stats3, null, 4));

console.log("Total Duration:", performance.now(), "ms");

function test() {
    const fairPlayer = genCFPlayer(config.fairProbability);
    const cheatPlayer = genCFPlayer(config.cheatProbability);
    for (let i = 0; i < config.simulations; i++) {
        let flips = 0;
        let fairHeads = 0;
        let cheatHeads = 0;
        while (flips < config.flipCount) {
            // true is heads, false is tails
            if (fairPlayer.next().value) {
                fairHeads++;
            }
            if (cheatPlayer.next().value) {
                cheatHeads++;
            }
            flips++;
            let ind1 = flips - 1;
            testOutput.fairOutput[ind1][i] = fairHeads;
            testOutput.cheatOutput[ind1][i] = cheatHeads;
        }
    }
}

// 1/true is heads, 0/false is tails
function* genCFPlayer(chance) {
    while (true) {
        yield Math.random() < chance;
    }
}

function getStats() {
    let index = 1;
    for (const arr1 of testOutput.fairOutput) {
        getStatsHelper(arr1, stats.fairOutput, index++);
    }
    index = 1;
    for (const arr1 of testOutput.cheatOutput) {
        getStatsHelper(arr1, stats.cheatOutput, index++);
    }
}

function getStatsHelper(arr1, location, maxIndex) {
    const arr = _.clone(arr1);
    arr.sort();
    const objData = {};
    for (let i = 0; i <= maxIndex; i++) {
        objData[i] = [0, 0];
    }
    for (const val of arr) {
        if (!objData[val]) {
            console.log(val, objData, objData[val])
        }
        objData[val][1]++;
    }
    for (const key in objData) {
        objData[key][0] = objData[key][1] / config.simulations;
    }
    location.push(objData);
}

function getStats2() {
    for (const obj1 of stats.fairOutput) {
        getStats2Helper(obj1, stats2.fairOutput);
    }
    for (const obj1 of stats.cheatOutput) {
        getStats2Helper(obj1, stats2.cheatOutput);
    }
}

function getStats2Helper(obj1, location) {
    const objData = {};
    const keys = Object.keys(obj1); // Keys for obj1
    const flipCount = keys.length - 1;
    // const gainCount = config.correctCoins - flipCount;
    // const breakEven = (config.incorrectCoins / gainCount);
    // const sustainAccuracy = breakEven / (breakEven + 1);
    // 30/(45-n)
    const sustainAccuracy = (config.incorrectCoins) / (config.incorrectCoins + config.correctCoins - n);
    objData['index'] = flipCount;
    objData['sustainAccuracy'] = sustainAccuracy;
    let usageAccuracy = 1;
    let keyInd = 0;
    for (const key in keys) { // Not a typo (most likely)
        const lossPercent = obj1[key][0];
        if (usageAccuracy - lossPercent >= sustainAccuracy) {
            usageAccuracy -= lossPercent;
        } else {
            break;
        }
        keyInd++;
    }
    keyInd -= 1;
    objData['usageAccuracy'] = usageAccuracy;
    objData['profitIfCorrect'] = usageAccuracy - sustainAccuracy;
    objData['maxBeforeCheat'] = keyInd;
    location.push(objData);
}

function getStats3() {

}