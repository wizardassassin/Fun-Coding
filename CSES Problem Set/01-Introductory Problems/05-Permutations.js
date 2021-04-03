let inputString = "";
let inputIndex = 0;

process.stdin.on('data', input => {
    inputString += input;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split(/\n|\s+/);

    let result = main();

    process.stdout.write(String(result));
});

function main() {
    let acc = "2";
    let len = inputString.shift();
    if (len == 1) return 1;
    if (len < 4) return "NO SOLUTION";
    for (let i = 4; i <= len; i += 2) {
        acc += " " + i;
    }
    for (let i = 1; i <= len; i += 2) {
        acc += " " + i;
    }
    return acc;
}

function nextIndex() {
    return inputString[inputIndex++];
}