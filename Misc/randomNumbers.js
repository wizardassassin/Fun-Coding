import crypto from "crypto";

let min = 0;
let max = 10;

let tests = 1000000000;

let a = 0;

for (let i = 0; i < tests; i++) {
    let cryptVal = crypto.randomInt(min, max);
    let normVal = Math.floor(Math.random() * (max - min)) + min;
    if (cryptVal == normVal)
        a++;
    // console.log(cryptVal, normVal);
}
console.log(a, tests, a / tests);