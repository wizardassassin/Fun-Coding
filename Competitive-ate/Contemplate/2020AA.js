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

function solve(n, b, a) {

    a.sort((a, b) => a - b)

    let acc = 0;
    for (let i of a) {
        b -= i;
        if (b < 0)
            break;
        else
            acc++;
    }

    return acc;
}

function main() {
    let tests = readLine();

    for (let i = 1; i <= tests; i++) {

        let [n, b] = readLine().split(/\s+/g);
        let a = readLine().split(/\s+/g);


        process.stdout.write(`Case #${i}: ${solve(n, b, a)}\n`);
    }
}