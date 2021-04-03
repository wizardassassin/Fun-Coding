let inputString = "";
let inputIndex = 0;

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', input => {
    inputString += input;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split(/\n|\s+/);//.map(Number);
        
    let result = main();
    
    process.stdout.write(String(result));
});

function main() {
    let acc = 0;
    let len = inputString.shift();
    for (let i = 0; i < len; i++) {

    }
    return acc;
}

function nextIndex() {
    return inputString[inputIndex++];
}
