

let inputString = "";
let inputIndex = 0;

process.stdin.on('data', input => {
    inputString += input;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split(/\n/);

    let result = main();

    process.stdout.write(String(result));
});

function main() {
    let acc = "";
    let len = inputString.shift();
    let big1 = BigInt(1);
    let big2 = BigInt(2);
    for (let i = 0; i < len; i++) {
        let [y, x] = nextIndex().split(/\s/);
        y = BigInt(y);
        x = BigInt(x);
        let temp = BigInt(0);
        if (y > x) {
            temp += y ** big2 - y + big1;
            if (y % big2)
                temp -= y - x;
            else
                temp += y - x;
        } else {
            temp += x ** big2 - x + big1;
            if (x % big2)
                temp += x - y;
            else
                temp -= x - y;
        }
        acc += temp + '\n';
    }
    return acc.trim();
}

function nextIndex() {
    return inputString[inputIndex++];
}