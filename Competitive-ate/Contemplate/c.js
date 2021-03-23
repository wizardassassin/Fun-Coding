'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function solve(r, c, arr) {
    let acc = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            rec(i, j);
        }
    }
    function rec(i, j) {
        let n = [
            [i, j - 1],
            [i, j + 1],
            [i + 1, j],
            [i, - 1, j]
        ].filter(([o, p]) => o > 0 && o < r && p > 0 && p < c && arr[i][j] - arr[o][p] > 1)
        n.forEach(([o, p]) => {
            let l = arr[o][p] - arr[i][j] - 1;
            arr[o][p] += l;
            acc += l;

        })
        n.forEach(([o, p]) => {
            rec(o, p);
        });
    }
    return -acc;
}

function main() {
    let tests = readLine();

    for (let i = 1; i <= tests; i++) {

        let [r, c] = readLine().split(/\s+/g);
        let arr = [];
        for (let i = 0; i < r; i++)
            arr.push(readLine().split(/\s+/g).map(Number))


        process.stdout.write(`Case #${i}: ${solve(r, c, arr)}\n`);
    }
}