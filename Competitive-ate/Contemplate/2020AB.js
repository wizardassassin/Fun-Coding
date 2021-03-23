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

function main() {

    let tests = readLine();

    for (let i = 1; i <= tests; i++) {

        let [n, k, p] = readLine().split(/\s+/g);

        let a = [];
        for (let i = 0; i < n; i++) {
            a.push(readLine().split(/\s+/g));
        }



        const solve = () => {
            let cute = [];
            let acc = 0;
            let avg = a.map(i => x.map(j => ));
            console.log([n, k, p, a]);
            return [n, k, p, a];
        }



        process.stdout.write(`Case #${i}: ${solve()}\n`);
    }

}