let inputString = "";
let inputIndex = 0;

process.stdin.on('data', input => {
    inputString += input;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split(/\n|\s+/).map(Number);

    let result = main();

    process.stdout.write(String(result));
});

function main() {
    let acc = 0;
    let len = inputString.shift();
    for (let i = 1; i < len; i++) {
        let add = Math.max(inputString[i - 1] - inputString[i], 0);
        inputString[i] += add;
        acc += add;
    }
    return acc;
}

function nextIndex() {
    return inputString[inputIndex++];
}